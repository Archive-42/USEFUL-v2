## Accessing Localkube Resources From Inside A Pod: Example etcd

In order to access localkube resources from inside a pod, localkube's host ip address must be used. This can be obtained by running:

```shell
$ minikube ssh -- "sudo /usr/local/bin/localkube --host-ip"
localkube host ip:  10.0.2.15
```

You can use the host-ip:`10.0.2.15` to access localkube's resources, for example its etcd cluster. In order to access etcd from within a pod, you can run the following command inside:

```shell
curl -L -X PUT http://10.0.2.15:2379/v2/keys/message -d value="Hello"
```
