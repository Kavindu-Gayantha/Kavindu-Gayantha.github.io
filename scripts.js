

function visibleAbout()
{
    var visible = document.getElementById('topicname');
    visible.innerHTML = `
    <div class="row">
        <div class="col-4"></div><div class="col-4"><h1 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px; font-weight:bold;">About</h1></div><div class="col-4"></div>
    </div>
        <div class="row" id="detailsSection"> 
            <div class="col-12-wd"> <br>
                <h5 class="nameAbout text-white">Hello there I'm <strong class="text-primary">Kavindu Gayantha</strong> , second year software engineering undergraduate of University of Kelaniya. I'm good at team working and interesting about web developing and mobile application development.<br>And I'm willing to learn new things always to improve my skills.</h5>
                    <div class="row">
                        <div class="col-4"></div><div class="col-4"></div><div class="col-4"></div>
                        
                    </div>
            </div>
        
        <table class="table table-borderless bg-transparent" style="float:left; color:rgb(67, 147, 200);">
            <tbody>
                <tr>
                    <!-- <th scope="row">1</th> -->
                    <td>Phone</td>
                    <td>+94 71 873 273</td>
                    <!-- <td>@mdo</td> -->
                </tr>
                <tr>
                    <!-- <th scope="row">2</th> -->
                    <td>Email</td>
                    <td>s.kavindu.gayantha@gmail.com</td>
                    <!-- <td>@fat</!--> 
                </tr>
                <tr>
                    <!-- <th scope="row">3</!--> 
                    <td>Date of birth</td>
                    <td>27<sup>th</sup> of june, 1996</td>
                    <!-- <td>@twitter</!--> 
                </tr>
            </tbody>
        </table>
        <!-- progress bar -->
        
        <a class="btn btn-outline-primary" href="http://localhost:8080/Home" role="button">Home Page</a>



    `;
}
function visibleEducation()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML = `
    <div class="row">
        <div class="col-4"></div><div class="col-4"><h1 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px; font-weight:bold;">Education</h1></div><div class="col-4"></div>
    </div>
    <div class="row"> <!-- details of education--> 
        <div class="col-12-wd"> <br>
            

                     <table class="table table-borderless bg-transparent text-white" style="float:center">
                        <tbody>
                            <tr>
                               
                                <td style="float:right"><img src="Kelaniya.png" style="width:150px;"> </td><td ><h2 class="text-white">University of Kelaniya</h2>
                                 <h6><strong class="text-primary">undergraduate of bsc(hon's) in software engineering</strong></h6><h6>2018-2022</h6>
                                 </td>
                            
                            </tr>
                            <p>
                            <tr>
                            
                                <td style="float:right;"><img src="pcm.png" style="width:150px"> </td><td><h3 class="text-white" style="padding-top:20px">President's college Maharagama</h3>
                                <h6><strong class="text-primary">Maths stream</strong>
                                <h6>2002-2015</h6>
                                </td>
                                
                                    
                            </tr>
                                
                        </tbody>
                    </table>
                           
               
        </div>
    </div>
    `;
}
function visibleExtra()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML = `
    <div id="extraCuricularColoumn">
        <div class="col-7" id="topicname" > 
            <div class="row">
                <div class="col-4"></div><div class="col-4"><h4 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px;">Extra_Curricular_Activities</h4></div><div class="col-4"></div>
            </div>
        </div>
    </div>
        
    `;
}
function visibleAchievements()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML = `
        <div id="achievementsColoumn">
            <div class="col-7" id="topicname" > <!--achievements coloumn-->
                <div class="row">
                    <div class="col-4"></div><div class="col-4"><h4 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px;">achievements</h4></div><div class="col-4"></div>
                </div>
            </div>
        </div>
        
    `;
}
function visibleProject()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML = `
    <div id="projectColoumn">
        <div class="col-7" id="topicname" > <!--project coloumn-->
            <div class="row">
                <div class="col-4"></div><div class="col-4"><h4 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px;">projects</h4></div><div class="col-4"></div>
             </div>
        </div>
    </div>

    `;

}
function visibleContact()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML =`
    <div id="contactColoumn">
        <div class="col-7" id="topicname" > <!--contact coloumn-->
            <div class="row">
                <div class="col-4"></div><div class="col-4"><h4 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px;">contact</h4></div><div class="col-4"></div>
            </div>
        </div>
    </div>
    `;
}



