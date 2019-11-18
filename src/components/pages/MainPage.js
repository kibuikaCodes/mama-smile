import React, { Component } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import axios from 'axios';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: "",
            results: "results"
         }
    }

handleQueryInput = event => {
    
    this.setState({ query: event.target.value });
    
};

handleSearch = event => {
    event.preventDefault();
    this.setState({ results: "" });

    const param = this.state.query;

    fetch(`https://nutritionix-api.p.rapidapi.com/v1_1/search/cheddar%2520cheese?fields=item_name%252Citem_id%252Cbrand_name%252Cnf_calories%252Cnf_total_fat`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nutritionix-api.p.rapidapi.com",
		"x-rapidapi-key": "945a865f73msh1a37f64800bee23p145c82jsn63bd3dacc699"
	}
})
.then(response => {
    this.setState({ results: response.status })
	console.log(response.status);
})
.catch(err => {
	console.log(err);
});
}



    render() { 
        return ( 
            <div className="signin-page">
                <h4 className="button">Type a food and find out the calorie content and fat content of that food</h4>
            <Form style={{ marginTop: "4rem"}}>
                <FormControl type="text" placeholder="Type a food" className=" mr-sm-2" name="query" value={this.state.query} onChange={this.handleQueryInput} require/>
                <div className="button">
                <Button type="submit" onClick={this.handleSearch}>Submit</Button>

                </div>
                <div className="button">
                { this.state.results 
                ? <p>{this.state.results}</p>
                : <p>Please wait 😎 </p>}
                </div>
               
            </Form>
                

            </div>
         );
    }
}
 
export default MainPage;