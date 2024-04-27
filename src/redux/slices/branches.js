import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDocs, orderBy, query } from "firebase/firestore";
import { branchesCollection, productsCollection } from "../../data/firestore";

const initialState = {
    branches: {
        data: [],
        status: 'idle'
    }
}

export const getBranchesFromDatabase = createAsyncThunk('branches/getBranchesFromDatabase', async()=> {
    const branchesDatabase = await getDocs(branchesCollection).then(
        (snapshot) => {
            let branches = []
            snapshot.docs.forEach((doc) => {
    
                const data = doc.data()
    
                branches.push({
                    ...data,
                    id: doc.id
                })
            })
            return branches
        }
    )

    if (typeof(branchesDatabase) == 'object') {
        return branchesDatabase
    }
})


export const branchesSlice = createSlice({
    name: 'branches',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(getBranchesFromDatabase.pending, (state) => {
                state.branches.status = 'loading'
            })
            .addCase(getBranchesFromDatabase.fulfilled, (state, action) => {
                state.branches.status = 'fulfilled'
                const data = action.payload
                state.branches.data = data
            })
            .addCase(getBranchesFromDatabase.rejected, (state) => {
                state.branches.status = 'rejected'
            })
    }
})

export const { hello } = branchesSlice.actions
export default branchesSlice.reducer
