import React from 'react'
import ChaptersList from './Chapters_list'

const Chapters=(props)=>{
    return(
        <ul>    {props.ChaptersE.length!=0 && 
                    <li key={0}>
                        <h2>Select Chapters from English</h2>
                        <form action="/action_page.php">
                            <ul >
                            {props.ChaptersE.map((chapter)=>{
                               return <ChaptersList chapter={chapter} subject={"E"}/>
                            })}
                            </ul>
                            
                        

                        </form>
                    </li>}
                    {props.ChaptersM.length!=0 && 
                    <li key={1 }>
                        <h2>Select Chapters from Maths</h2>
                        <form action="/action_page.php">
                            <ul>
                            {props.ChaptersM.map((chapter)=>{
                               return <ChaptersList chapter={chapter} subject={"M"}/>
                            })}
                            </ul>
                            
                        

                        </form>
                    </li>}
                    {props.ChaptersG.length!=0 && 
                    <li key={2}>
                        <h2>Select Chapters from General Knowledge</h2>
                        <form action="/action_page.php">
                            <ul>
                            {props.ChaptersG.map((chapter)=>{
                               return <ChaptersList chapter={chapter} subject={"G"}/>
                            })}
                            </ul>
                            
                        

                        </form>
                    </li>}
                    {props.ChaptersI.length!=0 && 
                    <li key={4}>
                        <h2>Select Chapters from Intelligence</h2>
                        <form action="/action_page.php">
                            <ul>
                            {props.ChaptersI.map((chapter)=>{
                               return <ChaptersList chapter={chapter} subject={"I"}/>
                            })}
                            </ul>
                            
                        

                        </form>
                    </li>}
                
            
  
      </ul>
    );
}

export default Chapters;