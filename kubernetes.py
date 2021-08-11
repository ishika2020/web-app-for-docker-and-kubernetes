#! /usr/bin/python3

print("content-type: text/html")
print()



import cgi
import subprocess as sp
form = cgi.FieldStorage()
cm=""
output=""

cm = form.getvalue("x")
cm = cm.split()

if "launchpod" in cm:
    output = sp.getoutput("sudo kubectl run " + cm[1] + " --image=" + cm[2])
#   cmd = "sudo kubectl run " + cm[1] + " --image=" + cm[2]
#   print(cmd)
    print(output)
elif "deletepod" in cm:
    output = sp.getoutput("sudo kubectl delete pod " + cm[1])
#   cmd = "sudo kubectl delete pod " + cm[1]
#   print(cmd)
    print(output)
elif "deletedeployment" in cm:
    output = sp.getoutput("sudo kubectl delete deployment " + cm[1])
#   cmd = "sudo kubectl delete deployment " + cm[1]
#   print(cmd)
    print(output)
elif "createdeployment" in cm:
    output = sp.getoutput("sudo kubectl create deployment " + cm[1] + " --image " + cm[2])
#   cmd = "sudo kubectl create deployment " + cm[1] + " --image " + cm[2]
#   print(cmd)
    print(output)
elif "expose" in cm:
    output = sp.getoutput("sudo kubectl expose deployment " + cm[1] + " --type=NodePort --port=" + cm[2])
#   cmd = "sudo kubectl expose deployment " + cm[1] + " --type=NodePort --port=" + cm[2]
#   print(cmd)
    print(output)
elif "scale" in cm:
    output = sp.getoutput("sudo kubectl scale deployment " + cm[1] + " --replicas=" + c[2])
#   cmd = "sudo kubectl scale deployment " + cm[1] + " --replicas=" + c[2]
#   print(cmd)
    print(output)
elif "deleteall" in cm:
    output = sp.getoutput("sudo kubectl delete all --all")
#   cmd = "sudo kubectl delete all --all"
#   print(cmd)
    print(output)
elif "showall" in cm:
    output = sp.getoutput("sudo kubectl get pods")
#   cmd = "sudo kubectl get pods"
#   print(cmd)
    print(output)
else:
    print("something went wrong")

