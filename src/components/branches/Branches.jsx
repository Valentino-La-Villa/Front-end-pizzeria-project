import React from "react";
import youCanFindUsIn from '../../assets/icons/You-can-find-us-in.png'
import Branch from "./Branch";
import { useSelector } from "react-redux";
import LoadingScreenForBranchesPage from "./loadingScreens/BranchesLS";

export default function Branches() {

    const branches = useSelector(state => state.branches.branches)

    let branchesDisplay = <LoadingScreenForBranchesPage />
    
    if (branches.status == 'fulfilled') {
        branchesDisplay = branches.data?.map(branch=>{
            return (
                <Branch
                key={branch.name}
                index={branches.data?.findIndex(item => item.id == branch.id)}
                {...branch} />
            )
        })
    }

    return (
    <main>
            
        <div className="container text-start gx-5 p-1 my-5">

            <div className="row d-flex justify-content-center mb-5">
                <img className="col-9 col-sm-6 col-md-5 col-lg-4" src={youCanFindUsIn} alt="" />
            </div>
            
            {branchesDisplay}
        </div>
    </main>
    )
}