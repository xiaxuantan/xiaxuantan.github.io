import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';

class Posts extends Component {

    // TODO: add pagination

    render() {
        const postItems = this.props.postsMeta.map(obj => (
            <tr className="row m-0">
                <td className="col-xs-8 col-md-8">
                    <Link to={'/post/' + obj.key}>
                        {obj.title}
                    </Link>
                </td>
                <td className="col-xs-4 col-md-4">{obj.date}</td>
            </tr>
        ))
        return (
            <Table striped responsive hover>
                <thead>
                    <tr className="row m-0">
                        <th className="col-xs-8 col-md-8">Title</th>
                        <th className="col-xs-4 col-md-4">Published Time</th>
                    </tr>
                </thead>
                <tbody>
                    {postItems}
                </tbody>
            </Table>
        )
    }
}

export default Posts;