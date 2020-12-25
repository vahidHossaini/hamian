export default `


.hamain-modal {
  z-index: 99999999;  
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  align-items: center;
  justify-content: center;
}

/* Modal Content */
.hamian-modal-container {
  background-color: #FFECB3;
  border-radius: 30px;
  width: 350px;
  padding-top: 50px;
  position: relative;
  transition-property: all;
  transition-duration: .5s;
  transition-timing-function: ease-in-out;  
}

.hamian-modal-content{
  padding: 30px;
  border-radius: 30px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background: white;
}


.hamian-open-button{
  background-color: #FFC107;
  border: none;
  padding: 10px 40px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  /* margin-left: 25%; */
  /* position: fixed; */
  display: flex;
  justify-self: center;
  width: 100%;
  margin-top: 40px;  
  cursor: pointer;
}

/* The Close Button */
.hamian-close {
  display: orange;
  position: absolute;
  top: 11px;
  right: 16px;
  width: 28px;
  height: 28px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.57 12.1a.96.96 0 000 1.34c.37.36 1 .36 1.34 0L7 8.37l5.09 5.09c.36.35.97.35 1.34-.01a.96.96 0 000-1.34L8.34 7.01l5.08-5.08a.95.95 0 000-1.33.97.97 0 00-1.34-.01L6.99 5.68 1.91.59a.96.96 0 00-1.33 0 .97.97 0 00-.01 1.34l5.09 5.08-5.1 5.1z' fill='orange'/%3E%3C/svg%3E");
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: 50% 7px;
  border-radius: 100%;
  cursor: pointer;
}
.hamian-close:hover,
.hamian-close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.hamian-logo {
  width: 70px;
  height: 70px;
  margin: 0 auto;
  margin-top: -56px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzOTMuODUgMzkzLjg1Ij48dGl0bGU+QXNzZXQgMzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48Y2lyY2xlIGN4PSIxOTYuOTIiIGN5PSIxOTYuOTIiIHI9IjE5Ni45MiIgc3R5bGU9ImZpbGw6I2ZmYzEwNyIvPjxwYXRoIGQ9Ik0yOTcuMDcsMTY2LjI1VjY4LjQ1aC04MXY1My4yNGgtNDMuNFY2OC40NUg5MS4wNXY0Ny40Nkw3My4xMSwxMTMsNTQuODcsMTQ2LjMybDE4LjI0LDM1cTksMS43OCwxOC41MiwzLjIzVjMyNS40SDE3My44VjI0My4yMmMxNC42NC0uMTgsMjkuMS0uNDEsNDMtLjc3VjMyNS40aDc5LjI3VjIzNy41NUEyMDkuMSwyMDkuMSwwLDAsMCwzMTYuNzQsMjM0TDMzOSwxOTcuMDdsLTIyLjI0LTM0LjI5QTEwMS4yNiwxMDEuMjYsMCwwLDEsMjk3LjA3LDE2Ni4yNVpNMTExLjMsODdoNDIuODN2MzQuNzJjLTE0LjU0LS45NC0yOS4yMy0xLjc4LTQyLjgzLTMuODZaTTkyLjIxLDEzNWMzOC4wOCw1LjcxLDg3LjgyLDcsMTQ0LjA5LDUuNzlWODdoNDEuMDl2ODIuNzZjLTY2LDUuNDItMTI4LjQyLDUuMzMtMTg1LjE4LTMuNDhaTTI3Ny4zOSwzMDYuNjNIMjM2Ljg4di02NC44YzE0LjQ4LS41NCwyOC4xNC0xLjI3LDQwLjUxLTIuMzJabTE4LjcyLTg5LjMxcS05LjEyLDEuNDEtMTguNzIsMi40Ny0xOS4zNiwyLjE2LTQwLjUxLDMtOS44Mi40MS0yMCwuNTMtMzAuNjYuNDEtNjQuNDUtMS41MVYzMDYuM0gxMTEuM1YxODcuMmM1Mi4yNSw2LDExNC4xOCw1LjQsMTg1LjE5LTEuMjdsLjU4LDMxLjI1WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik05MS42MiwxODQuNzFWMTk0LjhhODQuMjQsODQuMjQsMCwwLDAsMTkuNjgsMi4yNXYtOS43MloiIHN0eWxlPSJmaWxsOiNmZmRmNWEiLz48cGF0aCBkPSJNMjM2Ljg4LDI0MnYxMS42NHEtOS44Mi40MS0yMCwuNTNWMjQyWiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjxwYXRoIGQ9Ik0yMzYuODgsMjQydjExLjY0cS05LjgyLjQxLTIwLC41M1YyNDIuNDVDMjIzLjY1LDI0Mi4zNywyMzAuMzMsMjQyLjIyLDIzNi44OCwyNDJaIiBzdHlsZT0iZmlsbDojZmZkZjVhIi8+PHBhdGggZD0iTTI5Ni4xMSwyMzcuNTV2MTAuNjFxLTkuMTIsMS40MS0xOC43MiwyLjQ3di0xMUMyODMuNzgsMjM4Ljg3LDI5MCwyMzguNDksMjk2LjExLDIzNy41NVoiIHN0eWxlPSJmaWxsOiNiM2IzYjMiLz48cGF0aCBkPSJNMjk2LjExLDIzNy41NXYxMC42MXEtOS4xMiwxLjQxLTE4LjcyLDIuNDd2LTExQzI4My43OCwyMzguODcsMjkwLDIzOC40OSwyOTYuMTEsMjM3LjU1WiIgc3R5bGU9ImZpbGw6I2ZmZGY1YSIvPjwvZz48L2c+PC9zdmc+");
}

.mamian-title{
  font-size: 40px;
  color: #7e7048;
  font-weight: bold;
  padding: 40px 0;
  width: 100%;
  text-align: center;
}

.mamian-description{
  color: #7e7048;
}
`