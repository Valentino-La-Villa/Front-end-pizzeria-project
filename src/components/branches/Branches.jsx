import React from "react";
import youCanFindUsIn from '../../assets/icons/You-can-find-us-in.png'
import Branch from "./Branch";
import { branchesData } from "../../data/branchData";

export default function Branches() {

    const branchesDisplay = branchesData.map(branch=>{
        return (
            <Branch
            key={branch.id}
            index={branchesData.findIndex(item => item.id == branch.id)}
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