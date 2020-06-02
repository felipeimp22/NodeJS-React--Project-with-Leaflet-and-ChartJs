import styled, { keyframes, css } from 'styled-components';

export const Div = styled.div`

 /* min-width: "1000vh"; */

 height:100vh;
 min-height: 40vh;
 width:95%;
background-color: rgba(212, 212, 212, 0.5);

display:flex;
align-items:center;
justify-content:center;




/* max-width:200vh; */
border-radius: 4px;
box-shadow:0 0 4px 4px rgba(0, 0, 0, 0.1);
padding: 10px;
margin: 8vh auto;

margin-left: 2vw;
margin-right: 5vw;



.map{
  margin-right:12vw;


  .titleTable{
    display:flex;
    flex-direction: row;
    background-color:rgb(181, 179, 179);
    width:130vh;
    margin-left:0vw;
      margin-right:2vw;
      border-radius:5px;
     
    height:3vw;
    margin-bottom:1vh;
    h3{
      border: 1px solid rgb(232, 232, 232);
      border-radius:5px;
      display:flex;
    width:100vh;
    /* margin-left:2vw;
      margin-right:2vw; */
      color:white;
      justify-content:center;
      align-items:center;

    }
  }
  .contentTable{
    display:flex;
    flex-direction: row;
    background-color:rgb(201, 193, 193);
    width:130vh;
    margin-left:0vw;
      margin-right:2vw;
      border-radius:5px;
     
      height:2.6vw;
    margin-bottom:1vh;
    h4{
      border: 3px solid rgb(232, 232, 232);
      border-radius:5px;

      /* display:flex; */
       width:100vh;
    /* margin-left:2vw;
      margin-right:2vw; */
      justify-content:center;
      align-items:center;

    }

  }
}

`;

export const DivModal = styled.div`


`;

export const Div3 = styled.div`

background-color: rgba(230, 230, 230,0.1);

width:130vh;

min-height:30vh;

/* max-width:800px; */
border-radius: 4px;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);
padding: 2px;
margin: 2vh auto;

margin-left:0vw;
margin-right:6vh;

margin-top:4vh;
overflow:auto;



/* margin-left:-20vw; */
  /* display:flex; */
.container{
  max-height:15vw;
    overflow-y: auto;
    /* white-space: nowrap; */

}
`
export const MeuBotao = styled.button`
    background: #0099FF;
    border: 0.1px solid #0099FF;
    border-radius: 45%;
    color: #FDFDFD;
    font-size: 1.2rem;
    /* margin: 1rem; */
    padding: 0.5rem 1rem;
    display:flex;
    align-items:center;
    justify-content:center;
`;
export const Div2 = styled.div`


background-color: rgba(230, 230, 230,0.1);

width:40vh;

min-height:70vh;

/* max-width:800px; */
border-radius: 4px;
box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.4);
padding: 2px;
margin: 2vh auto;

margin-left:15vw;
margin-right:6vh;

margin-top:-22vh;



/* margin-left:-20vw; */
  display:flex;
  flex-direction:column;


.search{
  input{width:28.5vh;
  margin-top:4vh;
  }

}

.geometry{
  input{
    width:14vh;
    margin-left: 1vh;
    margin-right: -1vh;

  }
}

input{
     flex-direction:column;

      flex:1;
      border: 1px solid  rgba(255,255,255,1);
      padding: 10px 15px;
      border-radius:4px;
      font-size: 15px;
      max-height:1.2vw;
      max-width:35vh;
      background-color: rgba(255,255,255,0.1);
      /* min-width:35vh; */


      margin-left:2vw;
      margin-right:1vw;
      margin-top:2vh;

    }
    .sign{
      flex-direction:column;

      flex:1;
      border: 2px solid  rgba(32, 117, 86);
      padding: 10px 15px;
      border-radius:4px;
      font-size: 15px;
      max-height:1.2vw;
      max-width:35vh;
      background-color: rgb(60, 188, 141);
      /* min-width:35vh; */
      min-height:6vh;
      color: rgb(255,255,255);
      align-items:center;


      margin-left:3vw;
      margin-right:3vw;
      margin-top:10vh;
          }

          .cancel{
      flex-direction:column;

      flex:1;
      border: 2px solid  rgb(114, 32, 22);
      padding: 10px 15px;
      border-radius:4px;
      font-size: 15px;
      max-height:1.2vw;
      max-width:35vh;
      background-color: rgb(187, 44, 34);
      /* min-width:35vh; */
      min-height:6vh;
      color: rgb(255,255,255);
      align-items:center;


      margin-left:3vw;
      margin-right:3vw;
      margin-top: 3rem;
          }


`;




export const Form = styled.form`

margin-top:-68vh;
margin-right:2vw;
/* margin-left:-20vw; */
background-color:#eee;
  display:flex;
  flex-direction:row;
  input{
      flex:1;
      border: 1px solid #eee;
      padding: 10px 15px;
      border-radius:4px;
      font-size: 15px;

    }

`;