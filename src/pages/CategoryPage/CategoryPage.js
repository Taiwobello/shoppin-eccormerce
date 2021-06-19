import React from 'react'

import { connect } from 'react-redux'

import NavBar from '../../components/NavBar/NavBar'

function CategoryPage(props) {
    console.log(props.shopData)
    return (
        <div>
            <NavBar />
            <h1>Category Page</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        shopData: state.shopData
    }
}

export default connect(mapStateToProps)(CategoryPage)
