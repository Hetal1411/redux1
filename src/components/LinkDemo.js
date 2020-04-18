import react from 'react'

export default class LinkDemo extends Component {
    render(){
        const {}=this.props;
        return(
            <div>
                <br />
                Enter number of records        : <input type="text" placeholder="enter number of Records" /><br />
                Enter size of records per page : <input type="text" placeholder="Enter Records size per page" /><br />
                <button>pagination</button>


            </div>
        )
    }
}