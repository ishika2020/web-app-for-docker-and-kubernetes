<script>
function askinput() {
    var com = document.getElementById("input").value;
    if (com.includes("launch") && com.includes("pod")) {
      document.getElementById('1k').style.display='block';
    }

    else if (com.includes("delete") && com.includes("pod")) {
      document.getElementById("2k");
    }

    else if (com.includes("delete") && (com.includes("deployment") || com.includes("deploy"))) {
      document.getElementById("3k");
    }

    else if (com.includes("create") && (com.includes("deployment") || com.includes("deployment"))){
      document.getElementById("4k");
    }

    else if (com.includes("expose")) {
      document.getElementById("5k");
    }

    else if (com.includes("scale")) {
      document.getElementById("6k");
    }

    else if (com.includes("show") && com.includes("all pods")) {
      getoutput();
    }
}

function getoutput() {
var com = document.getElementById("input").value;
if (com.includes("launch") && com.includes("pod")) {
        var pod_name = document.getElementById("1k-p").value;
        var image_name = document.getElementById("1k-i").value;
        var cmd = "launchpod" + " " + pod_name + " " + image_name;
    }
else if (com.includes("delete") && com.includes("pod")) {
        var pod_name = document.getElementById("2k-p").value;
        var cmd = "deletepod" + " " + pod_name;
    }
else if (com.includes("delete") && com.includes("deployment")) {
        var deployment_name = document.getElementById("3k-d").value;
        var cmd = "deletedeployment" + " " + deployment_name;
    }
else if (com.includes("create") && com.includes("deployement")) {
        var deployment_name = document.getElementById("4k-d").value;
        var image_name = document.getElementById("4k-i").value;
        var cmd = "createdeployment" + " " + deployment_name + " " + image_name;
    }
else if (com.includes("expose")) {
        var deployment_name = document.getElementById("5k-d").value;
        var port_number = document.getElementById("5k-po").value;
        var cmd = "ëxpose" + " " + deployment_name + " " + port_number ;
    }
else if (com.includes("scale") && com.includes("deployment")) {
        var deployment_name = document.getElementById("6k-d").value;
        var replica = document.getElementById("6k-r");
        var cmd = "scale" + " " + deploment_name + " " + replica ;
    }
else if (com.includes("show") && com.includes("all")) {
        var cmd = "showall";
}
var xhr = new XMLHttpRequest();

xhr.open("POST","http://65.0.138.232/cgi-bin/kubernetes.py?x=" + cmd, true);
xhr.send();

xhr.onload = function(){
        var output = xhr.responseText;
        document.getElementById("out").innerHTML = output;
}
}

