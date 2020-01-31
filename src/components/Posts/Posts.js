import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Posts.css';


class Posts extends Component {

    // TODO: add pagination

    render() {
        const postItems = this.props.postsMeta.map(obj => (
            <tr className="row m-0">
                <td className="col-md-8 col-lg-9">
                    <Link to={'/post/' + obj.key}>
                        {obj.title}
                    </Link>
                </td>
                <td className="no-display-when-narrow col-md-4 col-lg-3">{obj.date}</td>
            </tr>
        ))
        return (
            <Table striped responsive hover>
                <thead>
                    <tr className="row m-0">
                        <th className="col-md-8 col-lg-9">Title</th>
                        <th className="no-display-when-narrow col-md-4 col-lg-3">Published Time</th>
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