
# Firebird  ไฟร์เบิร์ด  นกไฟ  ฟีนิกซ์
ฐานข้อมูลที่ Open source กันมีมายาวนาน <BR>
> ไม่ค่อยได้รับความนิยม เพราะขาดประชาสัมพันธ์ หรือยังไงไม่ทราบ<BR>

tag `firebird`  `docker` `client connect`  `server-linux`  `client-windows`

ออกเวอร์ชั่น 4 ผมก็ได้แค่ทดลองระบบ Replicate <BR>
ลองทำผ่านอินเตอร์เน็ต ได้บ้างไม่ได้บ้าง ก็ถือว่าดี <BR>
ถ้าใน LAN ก็ใช้งานได้ดี ** แต่ขาดคู่มือ และตัวอย่าง ** <BR>

![[Pasted image 20231002115500.png](https://firebirdsql.org/img/site/firebird.png)]

## ลิงค์ที่เกี่ยวข้อง
Firebird Database <BR>
https://firebirdsql.org/

```txt
version
- 2.5
- 3.0.11  
- 4.0.3
- 5.0.0 beta test
```

Firebird Docker ปรับปรุงล่าสุด ปี 2022 <BR> 
https://hub.docker.com/r/jacobalberty/firebird


## เริ่มกันเลย 
> คู่มือมีให้น้อยนิด ตัวอย่างไม่มี (เหมือนเดิม) 

จะใช้จะลอง Firebird Docker  สิ่งที่ต้องมี <BR>
1. ติดตั้ง Docker ไว้ในเครื่องคอมก่อน แนะนำ OS Linux สะดวกง่าย <BR>
จากที่ลอง AlmaLinux ,  Rocky 9 , Fedora 64 , <BR>
Mint 21.2  , Ubuntu 22.04.3 <BR>
*** ผมชอบ Mint 21.2  *** <BR>

## ดังนั้นเซิฟเวอร์ที่ Docker ทำงาน คือ Linux Mint 21.2 นะครับ

![](https://www.linuxmint.com/web/img/logo-mono.svg)

แจกลิงค์ <BR>
https://www.linuxmint.com/download.php

2. สร้างไฟล์ docker-compose.yml
> docker-compose.yml

เอาตัวอย่างไปเลยครับ
```docker
version: "3.8"
services:
  firebird:
    restart: always
    image: jacobalberty/firebird:latest
    container_name: firebird
    ports:
      - 3050:3050
      - 3051:3051
    volumes:
      - /firebird/data
    environment:
      - FIREBIRD_USER=SYSDBA
      - FIREBIRD_PASSWORD=masterkey
      - ISC_PASSWORD=root    
```

ISC_PASSWORD คือ รหัสผ่านหลัก ของ Firebird <BR>
FIREBIRD_USER คือ แอคเคาน์ default `SYSDBA` <BR>
FIREBIRD_PASSWORD คือ รหัสผ่าน default `masterkey` <BR>

volumes  ปลายทางที่ไฟล์ดาต้าเบส `/firebird/data` <BR>
มันเป็นค่า Default ตามคู่มือ  ผู้ที่เริ่มต้น อย่าเพิ่งไปพิศดาร <BR>
กำหนด path ใหม่ตามอำเภอใจ <BR>

3. รัน Docker <BR>
> docker compose -d up 

เมื่อไม่มีปัญหาใดๆ  <BR>

4. ทดสอบ connect  <BR>
## ใช้ PC , OS Windows 11
<BR>
### Connection String
IP Server : `192.168.x.x` <BR>
Port: `3050` <BR>
Path: `/firebird/data` <BR>
Database file: `data.fdb` <BR>

ประกอบร่างกัน ก็จะได้ <BR>
> 192.168.x.x/3050:/firebird/data/data.fdb


### หลังจากได้ทำการทดสอบ 
- สร้างเทเบิล 
- Query 
## สามารถใช้งานได้ปกติ

สำหรับใครเจอปัญหา <BR>
- รหัสผ่านไม่ถูกต้อง  << กำหนด รหัสผ่าน ISC_PASSWORD ให้ถูกต้อง
- Server not allowed to read/write <<  เปลี่ยนไป Database  Path ใหม่

<BR>
