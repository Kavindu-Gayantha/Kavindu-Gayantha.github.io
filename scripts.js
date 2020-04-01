 // Your web app's Firebase configuration
 
  // Initialize Firebase
 


function visibleAbout()
{
    var visible = document.getElementById('topicname');
    visible.innerHTML = `
    <div class="row">
        <div class="col-4 sm-4"></div><div class="col-4 sm-12"><h1 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px; font-weight:bold;">About</h1></div><div class="col-4 sm-4"></div>
    </div>
        <div class="row" id="detailsSection"> 
            <div class="col-sm-12"> <br>

            <h5 class="nameAbout text-white">Hello there I'm <strong class="text-primary">Kavindu Gayantha</strong> , I am an enthusiastic individual who is eager to learn new things perpetually while getting myself up-to-date with cutting edge technologies. I am good at being a team player as well as leading a team. I am more keen on Web development, Mobile Development, and Data Science, and seek an opportunity related to one of these areas.
            </h5>  
                <div class="row">
                        <div class="col-sm-4"></div><div class="col-sm-4"></div><div class="col-sm-4"></div>
                        
                    </div>
            </div>
        
        <table class="table table-borderless bg-transparent" style="float:left; color:rgb(67, 147, 200);">
            <tbody>
                <tr>
                    <!-- <th scope="row">1</th> -->
                    <td>Phone</td>
                    <td>+94 71 873 2730</td>
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
        
       
        <tr>
        </tr>



    `;
}
function visibleEducation()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML = `
    <div class="row">
        <div class="col-4 sm-4"></div><div class="col-4 sm-12"><h1 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px; font-weight:bold;">Education</h1></div><div class="col-4 sm-4"></div>
    </div>
    <div class="row "> <!-- details of education--> 
        <div class="col-12-wd"> 
            <div class="row"> <!-- details of education--> 
                <div class="col-sm-12"> <br>

                    <table class="table table-borderless bg-transparent text-white" style="float:center">
                       <tbody>
                       <tr> 
                        
                            <td class="col-sm-12" style="float:right"><img src="images/Kelaniya.png" style="width:150px;"> </td>
                            <td class="col-sm-12"><h2 class="text-white">University of Kelaniya</h2>
                                 <h6><strong class="text-primary">Undergraduate of B.Sc(Hon's) in Software Engineering</strong></h6><h6>2018-2022</h6>
                        </tr><tr>
                            
                            <p>
                            
                            
                                <td style="float:right;"><img src="images/pcm.png" style="width:150px"> </td><td class="col-sm-12"><h3 class="text-white" style="padding-top:20px">President's college Maharagama</h3>
                                <h6><strong class="text-primary">Maths stream</strong>
                                <h6>2002-2015</h6>
                                </td>
                                
                        </tr><tr>             
                            
                            
                            
                               <td style="float:right;"><img src="images/diploma2.png" style="width:150px"> </td><td class="col-sm-12"><h3 class="text-white" style="padding-top:20px">Diploma in English</h3>
                                <h6><strong class="text-primary">Buddhist and Pali university, Colombo</strong>
                                <h6>2017</h6>
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
    <div class="row">
            <div class="col-sm-12"><h1 class="nameAbout text-white" style="font-size: 25px; float:center; padding-bottom:0; padding-left:25% ; margin-bottom:0px; font-weight:bold;">Extra Curricular Activities</h1></div>
    </div>
    <div class="row"> <!-- details of education--> 
        <div class="col-12-wd">

            <div class="row"> <!-- details of extra curricular activities--> 
                <div class="col-sm-12"> <br>
                    <table class="table table-borderless bg-transparent text-white" style="float:center">
                        <tbody >
                            <tr>
                            
                                <td style="padding-bottom:2%";><img src="images/badminton.png" style="width:150px;"> </td><br><td class="col-sm-12"><h4 class="text-white">Represents University Badminton team</h4>
                                <h6><strong class="text-primary">2018-present</strong></h6>
                                </td>
                            </tr><p>
                            
                            <tr >
                                <div class="row" >
                                    <td ><img src="images/ieee.png" style="width:150px;"> </td><td class="col-sm-12"><h4 class="text-white">IEEE committee member, Kelaniya branch</h4>
                                    <h6><strong class="text-primary">2019-present</strong></h6>
                                    </td>
                                
                                </div>
                            </tr>
                            <tr >
                                <div class="row" >
                                    <td ><img src="images/medium222.png" style="width:150px;"> </td><td class="col-sm-12"><h4 class="text-white" style="padding-top:5%">Blogger at Medium</h4>
                                    <h6><strong class="text-primary"></strong></h6>
                                    </td>
                                
                                </div>
                            </tr>
                            <tr >
                                <div class="row" >
                                    <td ><img src="images/youtube.png" style="width:150px;"> </td><td class="col-sm-12"><h4 class="text-white" style="padding-top:5%">Youtube Channel Admin</h4>
                                    <h6><strong class="text-primary">CODE Storm youtube channel</strong></h6>
                                    </td>
                                
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>  <!-- row ends-->
        </div>
    </div>
        
    `;
}
function visibleAchievements()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML = `
    <div class="row">
            <div class="col-sm-12"><h1 class="nameAbout text-white" style="font-size: 25px; float:center; padding-bottom:0; padding-left:25% ; margin-bottom:0px; font-weight:bold;">Achievements & Awards</h1></div>
    </div>
               
            <div class="row"> <!-- details of achievements--> 
                <div class="col-12-wd"> 

                    <div class="row"> <!-- details of achievements--> 
                        <div class="col-sm-12"> 
                            <table class="table table-borderless bg-transparent text-white" style="float:center">
                                <tbody>
                                    <tr>
                                        <td style="padding-bottom:1%";><img src="images/badminton.png" style="width:150px;"> </td><br><td class="col-wd"><h4 class="text-white">Vice-Captain-2020</h4>
                                        <h6><strong class="text-primary">University of Kelaniya Badminton(Boys) Team</strong></h6>
                                        </td>
                                    </tr>
                                        <tr>
                                        <td style="padding-bottom:1%";><img src="images/awardssss.png" style="width:150px;"> </td><br><td class="col-wd"><h4 class="text-white" style="padding-top:7%">University Colours - 2019</h4>
                                        <h6><strong class="text-primary">Awarded colours for Badminton 2019</strong></h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding-bottom:1%";><img src="images/ieeextreme.png" style="width:150px;"> </td><br><td class="col-wd"><h4 class="text-white">IEEE Xtreme programming competition-13.0</h4>
                                        <h6><strong class="text-primary">Participated for the competition-2019</strong></h6>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img src="images/awardssss.png" style="width:150px;"> </td><td class="col-wd"><h4 class="text-white" style="padding-top:7%">University Colours - 2018</h4>
                                        <h6><strong class="text-primary">Awarded colours for Badminton 2018</strong></h6>
                                        </td>
                                     </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        
    `;
}
function visibleProject()
{
  var visible = document.getElementById("topicname");
    visible.innerHTML = `
    <div class="row">
        <div class="col-4 sm-4"></div><div class="col-4 sm-12"><h1 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px; font-weight:bold;">Projects</h1></div><div class="col-4 sm-4"></div>
    </div>
            <div class="row" style="padding-top:2px"> <!-- details of projects--> 
                <div class="col-sm-12"> 

                    <div class="row"> <!-- details of projects--> 
                        <div class="col-12-wd"> 
                            <table class="table table-borderless bg-transparent text-white" style="float:center">
                                <tbody>
                                    <tr>
                                        <td style="padding-bottom:0%";><img src="images/edoc.png" style="width:150px;"> </td><br><td class="col-wd"><h4 style="text-decoration:underline" class="text-white">E-Channeling App-<i style="font-size:20px">(Individual-Non Academic)</i></h4>
                                        
                                        <h6><strong class="text-white">Docters can register in app and patients can see docter details and can make appointments with doctors</strong></h6>
                                        <h5><strong class="text-primary">Flutter | MongoDB | Nodejs | Socket.io</strong></h5>
                                        <h6><strong class="text-primary">{ On-Going }</strong></h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top:2px"> <!-- details of projects--> 
                <div class="col-sm-12"> 

                    <div class="row"> <!-- details of projects--> 
                        <div class="col-12-wd"> 
                            <table class="table table-borderless bg-transparent text-white" style="float:center">
                                <tbody>
                                    <tr>
                                        <td style="padding-bottom:0%";><img src="images/attendance-mark.png" style="width:150px;"> </td><br><td class="col-wd"><h4 style="text-decoration:underline" class="text-white">Attendance Marking App-<i style="font-size:20px">(Individual-Non Academic)</i></h4>
                                        
                                        <h6><strong class="text-white">Marking attendance of team players of university Badminton Team</strong></h6>
                                        <h5><strong class="text-primary">Flutter | Firebase</strong></h5>
                                        <h6><strong class="text-primary">{ On-Going }</strong></h6>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row" style="padding-top:2px"> <!-- details of projects--> 
                <div class="col-sm-12"> 

                    <div class="row"> <!-- details of projects--> 
                        <div class="col-12-wd"> 
                            <table class="table table-borderless bg-transparent text-white" style="float:center">
                                <tbody>
                                    <tr>
                                        <td style="padding-bottom:0%";><img src="images/student mgt sys.png" style="width:150px;"> </td><br><td class="col-wd"><h4 class="text-white" style="text-decoration:underline">Student Management System-<i style="font-size:20px">(Individual-Academic)</i></h4>
                                        <h5><strong class="text-primary">HTML | CSS | JS | PHP | MySQL | Bootstrap</strong></h5>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>

    `;

}
function visibleContact()
{
    var visible = document.getElementById("topicname");
    visible.innerHTML =`
    <div class="row">
        <div class="col-4 sm-4"></div><div class="col-4 sm-12"><h1 class="nameAbout text-white" style="font-size: 25px; padding-bottom:0; margin-bottom:0px; font-weight:bold;">Contact me</h1></div><div class="col-4 sm-4"></div>
    </div>
        <div class="row"> <!-- details of contact--> 
            <div class="col"> <br>

                
                    
                    <div class="col" id="contactME">
                            <form class="text-white" id="feedbackform">
                                <div class="form-group">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div><br>
                                <div class="form-group">
                                    <label for="exampleInputname">Name</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="your name">
                                </div><br>
                                
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Send feedback</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                                    </div>  
                                    

                                <button type="submit" class="btn btn-primary">Send feedback</button>
                            </form>    
                   
                    </div>
                    
                  <!-- row ends-->
            </div>
       </div>
    `;
}





