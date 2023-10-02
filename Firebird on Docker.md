# Firebird  ไฟร์เบิร์ด  นกไฟ  ฟีนิกซ์
ฐานข้อมูลที่ Open source กันมีมายาวนาน
> ไม่ค่อยได้รับความนิยม เพราะขาดประชาสัมพันธ์ หรือยังไงไม่ทราบ

tag `firebird`  `docker` `client connect`  `server-linux`  `client-windows`

ออกเวอร์ชั่น 4 ผมก็ได้แค่ทดลองระบบ Replicate
ลองทำผ่านอินเตอร์เน็ต ได้บ้างไม่ได้บ้าง ก็ถือว่าดี
ถ้าใน LAN ก็ใช้งานได้ดี ** แต่ขาดคู่มือ และตัวอย่าง **

![[Pasted image 20231002115500.png]]

## ลิงค์ที่เกี่ยวข้อง
Firebird Database 
https://firebirdsql.org/

```txt
version
- 2.5
- 3.0.11  
- 4.0.3
- 5.0.0 beta test
```

Firebird Docker ปรับปรุงล่าสุด ปี 2022
https://hub.docker.com/r/jacobalberty/firebird


## เริ่มกันเลย 
> คู่มือมีให้น้อยนิด ตัวอย่างไม่มี (เหมือนเดิม) 

จะใช้จะลอง Firebird Docker  สิ่งที่ต้องมี
1. ติดตั้ง Docker ไว้ในเครื่องคอมก่อน แนะนำ OS Linux สะดวกง่าย
จากที่ลอง AlmaLinux ,  Rocky 9 , Fedora 64 , Mint 21.2  , Ubuntu 22.04.3
*** ผมชอบ Mint 21.2  ***

## ดังนั้นเซิฟเวอร์ที่ Docker ทำงาน คือ Linux Mint 21.2 นะครับ
![[logo-mono.svg]]
แจกลิงค์
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

ISC_PASSWORD คือ รหัสผ่านหลัก ของ Firebird
FIREBIRD_USER คือ แอคเคาน์ default `SYSDBA`
FIREBIRD_PASSWORD คือ รหัสผ่าน default `masterkey`

volumes  ปลายทางที่ไฟล์ดาต้าเบส `/firebird/data`
มันเป็นค่า Default ตามคู่มือ  ผู้ที่เริ่มต้น อย่าเพิ่งไปพิศดาร
กำหนด path ใหม่ตามอำเภอใจ

3. รัน Docker
> docker compose -d up 

เมื่อไม่มีปัญหาใดๆ 

4. ทดสอบ connect 
## ใช้ PC , OS Windows 11

### Connection String
IP Server : `192.168.x.x`
Port: `3050`
Path: `/firebird/data`
Database file: `data.fdb`

ประกอบร่างกัน ก็จะได้
>> 192.168.x.x/3050:/firebird/data/data.fdb


### หลังจากได้ทำการทดสอบ 
- สร้างเทเบิล 
- Query 
## สามารถใช้งานได้ปกติ

สำหรับใครเจอปัญหา
- รหัสผ่านไม่ถูกต้อง  << กำหนด รหัสผ่าน ISC_PASSWORD ให้ถูกต้อง
- Server not allowed to read/write <<  เปลี่ยนไป Database  Path ใหม่