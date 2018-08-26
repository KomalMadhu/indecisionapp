import React from 'react';
import AddOption from './AddOption.js';
import Options from './Options.js';
import Header from './Header.js';
import Action  from './Action.js';
import OptionModal from './OptionModal.js';


//IN scss "Elements are delimited with two (2) underscores (__), and Modifiers are delimited by two (2) hyphens (--)."
export default class IndecisionApp extends React.Component{
    state ={
        options : [],
        selectedOption : undefined
    };

    handleClearSelctedOption = () =>
    {
        this.setState (() =>
    {
        return{
            selectedOption : undefined
        };
    });
    };
    handleDeleteOptions = () =>
    {
        this.setState( () => {
            return {
                 options :[]
            };
        });
 
        this.setState( () => ({options: []}));
    };

    handleDeleteOption = (optiontoRemove) =>
    {
        this.setState  ((prevState) => ({
             options :prevState.options.filter((option) => optiontoRemove !== option)
        }));
    };


    handlePick = () => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            this.setState(() => ({
                selectedOption: option
            }));
    };


    handleAddOption = (option ) =>
    {
        if(!option)
        {
             return 'enter valid value to add item';
        }
        else if(this.state.options.indexOf(option) > -1)
        {
             return 'option already exists';
        }
        this.setState((prevState) =>({
             options: prevState.options.concat(option)
        }) );
    };
   
    
     componentDidMount = () =>
     {   // this function is for fecthing data
       try{
        const json = localStorage.getItem('options');
        const options =JSON.parse(json);

        if(options){
            this.setState( () => ({options}));
        }
    }catch (e){

        }
    }  
//componentDidUpdate() is actually saving data in local storage
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length)
        {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    

   
    render(){ 
        //const title = 'Indecision App';
        const subtitle = 'put your life in the hands of computer';
       
        return(
            <div>
                <Header  subtitle={subtitle}/>
                <div className='container'>
                    <Action
                    hasOption={this.state.options.length > 0}
                    handlePick ={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                        options ={this.state.options} 
                        handleDeleteOptions = {this.handleDeleteOptions}
                        handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                        handleAddOption={this.handleAddOption}
                    />
                    </div>
                    
                </div>
                 <OptionModal  
                 selectedOption ={this.state.selectedOption}
                 handleClearSelctedOption = {this.handleClearSelctedOption}
                 />
            </div>
        );
    }
}

