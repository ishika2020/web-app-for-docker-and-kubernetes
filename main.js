var count = 1
setTimeout(demo, 500)
setTimeout(demo, 700)
setTimeout(demo, 900)
setTimeout(reset, 2000)

setTimeout(demo, 2500)
setTimeout(demo, 2750)
setTimeout(demo, 3050)


var mousein = false
function demo() {
   if(mousein) return
   document.getElementById('demo' + count++)
      .classList.toggle('hover')

}

function demo2() {
   if(mousein) return
   document.getElementById('demo2')
      .classList.toggle('hover')
}

function reset() {
   count = 1
   var hovers = document.querySelectorAll('.hover')
   for(var i = 0; i < hovers.length; i++ ) {
      hovers[i].classList.remove('hover')
   }
}

document.addEventListener('mouseover', function() {
   mousein = true
   reset()
})

var modal = document.getElementById('1');

window.onclick = function(event) {
   if (event.target == modal){
      modal.style.display = "none";
   }
}

function run_container() {
var opt_r = document.getElementById("2_option").value;
var container_name_r = document.getElementById("2_container_name").value;
var image_name_r =  document.getElementById("2_image_name").value;
var xhr = new XMLHttpRequest();

xhr.open("POST","http://65.0.138.232/cgi-bin/docker.py?x=sudo docker run " + opt_r + " " +" --name " + container_name_r + " " + image_name_r, true);
xhr.send();

xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("out").innerHTML = output;
        }
}

function stop_container() {
var opt_sc = document.getElementById("6_option").value;
var container_name_sc = document.getElementById("6_container_name").value;
var xhr = new XMLHttpRequest();

xhr.open("POST","http://65.0.138.232/cgi-bin/docker.py?x=sudo docker stop " + opt_sc + " " +  container_name_sc, true);
xhr.send();

xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("out").innerHTML = output;
        }
}


function copy() {
var opt_copy = document.getElementById("option").value;
var container_name_copy = document.getElementById("12_container_name").value;
var src = document.getElementById("12_src_path").value;
var dest = document.getElementById("12_dest_path").value
var xhr = new XMLHttpRequest();

xhr.open("POST","http://65.0.138.232/cgi-bin/docker.py?x=sudo docker cp " + container_name_copy + ":" + src + " " + dest, true);
xhr.send();

xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("out").innerHTML = output;
        }
}

function container_info() {
var opt_coninfo = document.getElementById("14_option").value;
var xhr = new XMLHttpRequest();

xhr.open("POST","http://65.0.138.232/cgi-bin/docker.py?x=sudo docker ps " + opt_coninfo , true);
xhr.send();

xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("out").innerHTML = output;
        }
}

function all_images() {
var opt_ai = document.getElementById("20_option").value;
var xhr = new XMLHttpRequest();

xhr.open("POST","http://65.0.138.232/cgi-bin/docker.py?x=sudo docker images " + opt_ai , true);
xhr.send();

xhr.onload = function() {
        var output = xhr.responseText;
        document.getElementById("out").innerHTML = output;
        }
}

