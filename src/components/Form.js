import React from "react";
import {connect} from 'react-redux'
import { createPost,deletePost } from '../redux/actions'

const API_KEY = "80d02425703efd6905ca6d97a83faec3"
const lang = "en"

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ''
        }
    }
    

    submitHandler = async event => {
        event.preventDefault()
        
        const {title} = this.state
        let api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=${API_KEY}&units=metric&lang=${lang}`)
        if (api_url.ok) {
            let data = await api_url.json()
            const newPost = {
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                sky: data.weather[0].description,
                id: Date.now().toString()
            }
            this.props.createPost(newPost)
            
        }
       
        this.setState({title: '' })
    }
    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({...prev, ...{
            [event.target.name]: event.target.value
        }}))
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">React-Redux Weather App</h1> 
                    <form className="d-flex" onSubmit={this.submitHandler}>
                        <input 
                        className="form-control me-2"
                        aria-label="Search"
                        type="text" 
                        value={this.state.title}
                        id="title"
                        name="title" 
                        placeholder="Enter city name"
                        onChange={this.changeInputHandler}
                        />
                        <button className="btn btn-outline-light" type="submit">Add city</button>
                    </form>
                    </div>
                </nav>
            </div>
        )}
}
  
const mapDispatchToProps = {
        createPost, deletePost
    }

  export default connect(null,mapDispatchToProps)(Form)