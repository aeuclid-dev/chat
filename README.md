NOVEMBERIZING X WEB VIDEO CHAT
==============================

2021/12/20 : AWS INSTANCE LAUNCH

```shell
docker run -dit --name novemberizing-apache2 -p 8090:80 -v C:\Users\aeuclid\Desktop\Workspace\novemberizing\chat\docs:/usr/local/apache2/htdocs/ httpd
```

```shell
docker run --name novemberizing-mysql -p 3306:3306 -v C:\mysql\lib\mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=novemberizing@21 -d mysql
```




## PROTOTYPE

![home](HOME.svg)

![client](CLIENT.svg)

![chat](CHAT.svg)

## CLASS DIAGRAM

![Class Diagram](ClassDiagramChatOverview.jpg)