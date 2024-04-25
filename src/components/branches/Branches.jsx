import React from "react";
import placeholderBranchImage from '../../assets/branches/PhoenixBranch.png'
import youCanFindUsIn from '../../assets/icons/You-can-find-us-in.png'
import maps from '../../assets/icons/maps.png'
import { useBranchContext } from "../../data/ContextProvider";
import Branch from "./Branch";

export default function Branches() {

    const {branches} = useBranchContext()

    const branchesDisplay = branches.map(branch=>{
        return (
            <Branch
            key={branch.id}
            index={branches.findIndex(item => item.id == branch.id)}
            {...branch} />
        )
    })

    return (
    <main>
            
        <div className="container text-start gx-5 p-0 my-5">

            <div className="row d-flex justify-content-center mb-5">
                <img className="col-9 col-sm-6 col-md-5 col-lg-4" src={youCanFindUsIn} alt="" />
            </div>
            
            {branchesDisplay}
        </div>
    </main>
    )
}