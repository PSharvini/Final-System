import React, {Component} from 'react';
import firebase from "../firebase/firebase";

class Home extends Component {

    constructor() {
        super();

        this.state = {
            result : [] ,
            stringVal : '' ,
            fileM : '',
            fileMN : 'Choose file' , 
            yes : '' , 
            no : '' ,
            display : ' display-None'
        };


    }

    handleImgMainChange = (files) => {


        this.setState({
            fileM: files[0] ,
            fileMN : files[0].name ,
        },() =>{
            console.log(this.state.fileM.name);
        });
    }

    setData = (dt) =>{
        this.setState({
            stringVal : dt
        },() =>{
            console.log(this.state.stringVal);
        });
    }
    logOut = (event) => {
        localStorage.removeItem("UN");
        window.location.reload();
    }
    upload = (event) => {
        var totalStrng = "";
        var DBREf = firebase.database().ref();
        let fileUpload = this.state.fileM
        if (!fileUpload) {
            alert("Please Select An Image");
        } else {
            let storageRef = firebase.storage().ref(fileUpload.name);
            storageRef.put(fileUpload).then(function () {
                    storageRef.getDownloadURL().then(function (result) {
                        console.log(result);

                        var reader = new FileReader();
                        reader.onload = function(e) {
                            // Use reader.result
                            //alert(reader.result)
                            var lines = this.result.split('\n');
                            for(var line = 0; line < lines.length; line++){
                                //console.log(lines[line]);
                                if(line != 0){
                                    totalStrng = totalStrng + lines[line] + "\n;\n";
                                }

                            }
                            DBREf.child("1").set(
                                {
                                    totalData: totalStrng,
                                }
                            ).then( ()=>{
                                window.location.reload();
                                localStorage.setItem("fileUpload", "True");
                            });


                        }
                        reader.readAsText(fileUpload);



                    }.bind(this));
                }.bind(this)
            );

        }

    }

    componentDidMount() {
        if(localStorage.getItem("fileUpload") != null){
            var arr = [];
            var arr2 = [];
            var str = "";
            var y = 0;
            var n = 0;
            firebase.database().ref("1").once("value").then(snapshot => {
                snapshot.forEach(item => {
                    str = (item.val());
                    
                   

                });
                    arr = str.split("\n;\n");
                    for(var i=0 ; i < arr.length-2 ; i++){
                        //console.log(arr[i]);
                        var r = arr[i].split(",");
                        console.log(r[20] );
                        if(r[20] != "No"){
                            y = y + 1
                        }
                        else {
                            n = n + 1;
                        }
                        arr2.push({
                            "v0" : r[0],
                            "v1" : r[1],
                            "v2" : r[2],
                            "v3" : r[3],
                            "v4" : r[4],
                            "v5" : r[5],
                            "v6" : r[6],
                            "v7" : r[7],
                            "v8" : r[8],
                            "v9" : r[9],
                            "v10" : r[10],
                            "v11" : r[11],
                            "v12" : r[12],
                            "v13" : r[13],
                            "v14" : r[14],
                            "v15" : r[15],
                            "v16" : r[16],
                            "v17" : r[17],
                            "v18" : r[18],
                            "v19" : r[19],
                            "v20" : r[20],
                        })
                    }

                    this.setState({
                        result : arr2 ,
                        display : 'display-Block' ,
                        yes : y ,
                        no : n
                    })
              
            });
            localStorage.removeItem("fileUpload");
        }
    }

    render() {
        return (
            <div>
                <div className="bg-primary p-2">
                    <div className="row">
                        <div className="col">

                        </div>
                        <div className="col text-right">
                            <button className="btn btn-warning"
                                  onClick={this.logOut}>Logout</button>
                        </div>
                    </div>
                </div>
                <div className="w-50 mx-auto my-4 border border-dark p-2">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Upload Your .CSV File Here</label>
                    </div>
                    <div className="input-group mb-3">
                        <div className="custom-file">
                            <input type="file" className="custom-file-input" id="files" onChange={(e) => { this.handleImgMainChange(e.target.files) }}/>
                                <label className="custom-file-label" htmlFor="inputGroupFile02" id="lbl1"
                                       aria-describedby="inputGroupFileAddon02">{this.state.fileMN}</label>
                        </div>
                        <div className="input-group-append mx-2">
                            <span className="input-group-text" id="inputGroupFileAddon02"
                                  onClick={this.upload}>Upload</span>
                        </div>

                    </div>
                </div>

                <div  className={this.state.display}>
                    <table  className="table table-sm">
                        <thead>
                        <tr className="bg-primary">
                            <th scope="col">CustomerID</th>
                            <th scope="col">gender</th>
                            <th scope="col">SeniorCitizen</th>
                            <th scope="col">Partner</th>
                            <th scope="col">Dependents</th>
                            <th scope="col">tenure</th>
                            <th scope="col">PhoneService</th>
                            <th scope="col">MultipleLines</th>
                            <th scope="col">InternetService</th>
                            <th scope="col">OnlineSecurity</th>
                            <th scope="col">OnlineBackup</th>
                            <th scope="col">DeviceProtection</th>
                            <th scope="col">TechSupport</th>
                            <th scope="col">StreamingTV</th>
                            <th scope="col">StreamingMovies</th>
                            <th scope="col">Contract</th>
                            <th scope="col">PaperlessBilling</th>
                            <th scope="col">PaymentMethod</th>
                            <th scope="col">MonthlyCharges</th>
                            <th scope="col">TotalCharges</th>
                            <th scope="col">Churn</th>
                        </tr>
                        </thead>
                        <tbody id="tb">
                        {
                            this.state.result.map((field, key) =>
                                <tr className={field.v20}>
                                    <td>{field.v0}</td>
                                    <td>{field.v1}</td>
                                    <td>{field.v2}</td>
                                    <td>{field.v3}</td>
                                    <td>{field.v4}</td>
                                    <td>{field.v5}</td>
                                    <td>{field.v6}</td>
                                    <td>{field.v7}</td>
                                    <td>{field.v8}</td>
                                    <td>{field.v9}</td>
                                    <td>{field.v10}</td>
                                    <td>{field.v11}</td>
                                    <td>{field.v12}</td>
                                    <td>{field.v13}</td>
                                    <td>{field.v14}</td>
                                    <td>{field.v15}</td>
                                    <td>{field.v16}</td>
                                    <td>{field.v17}</td>
                                    <td>{field.v18}</td>
                                    <td>{field.v19}</td>
                                    <td>{field.v20}</td>
                                </tr>

                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Home;