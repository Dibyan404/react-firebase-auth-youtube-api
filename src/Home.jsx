import Lodash from 'lodash';
import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './Components/search_bar';
import VideoList from './Components/video_list';
import VideoDetail from './Components/video_detail';
import fire from './Config/fire';
const API_KEY = "AIzaSyB51HS-0EGhBIntjqUqpuyLkUw1IDdJuA0";

//Create a new component. This componenet should produce 
//some HTML
class Home extends Component{
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
        this.state = {
            videos:[],
            selectedVideo: null
        }    
        YTSearch({
            key: API_KEY, 
            term: 'surfboards'
            
        }, (videos) => {
           this.setState({
               videos: videos,
               selectedVideo: videos[0]
           });
        // or
        //    this.setState({ videos }); //es6 syntax 
        });
        this.VideoSearch('surfboards');
        

    }
    VideoSearch(term){
        YTSearch({
            key: API_KEY, 
            term: term
            
        }, (videos) => {
           this.setState({
               videos: videos,
               selectedVideo: videos[0]
           });
        // or
        //    this.setState({ videos }); //es6 syntax 
        });
    }
    
    logout(){
        fire.auth().signOut();    
    }
    render(){
        const videoSearch = Lodash.debounce((term) => { this.VideoSearch(term) }, 300);
        return (
            <div>
                
                <div className = "col-md1-6">
                    
                   
                    <div className="adsf">
                    {/* <SearchBar onSearchTermChange = { term => this.VideoSearch(term) }  /> */}
                    <SearchBar onSearchTermChange = {videoSearch} />
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList 
                        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                        videos={this.state.videos} />
                    {/* passing props */}
                </div>
                <button className="btn btn-secondary" onClick={this.logout}> Logout </button>
                </div>
            </div>
        );
    }
}

//Take this component's generated HTML and put it 
//on the page(in the DOM)

export default Home;