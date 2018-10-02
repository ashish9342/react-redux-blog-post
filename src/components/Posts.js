import React, {
    Component
} from 'react'
import Proptype from 'prop-types'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/PostAction'

class Posts extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }


    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({
    //             posts: data
    //         }));
    // }
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {

        


        const postItems = this.props.posts.map( post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));

        return ( <div>
            <h1> Heading Post </h1> 
            {postItems}  
            </div>
        )
    }
}

Posts.Proptype = {
    fetchPosts: Proptype.func.isRequired,
    props: Proptype.array.isRequired
}

const mapStatetoProps = state =>({
    posts : state.posts.items
})

export default connect(mapStatetoProps, { fetchPosts })(Posts);