---
title: "Chapter07 보조기억장치"
excerpt: "혼자 공부하는 컴퓨터 구조 + 운영체제"

categories:
  - Self-Taught Computer Architecture and Operating Systems
tags:
  - [tag1, tag2]

permalink: /self-taught-ca-os/auxiliary-storage/

toc: true
toc_sticky: true

date: 2025-05-25
last_modified_at: 2025-05-25
---


## 1 다양한 보조기억장치

***

> 가장 대중적인 보조기억장치는 하드디스크와 플래시 메모리이다.  
> 이들은 컴퓨터 시스템에서 데이터를 영구적으로 저장하는 데 사용된다.

***

### 하드디스크 (HDD: Hard Disk Drive)

> **하드디스크**는 데이터를 **자기적인 방식**으로 데이터를 저장하는 보조기억장치이다.     
> 저장 밀도가 높고 대용량 저장에 유리하여 현재까지 많이 사용되고 있다.

***

> **하드디스크의 구조** 
> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/27.png?raw=true" width="50%" height="50%" alt="스핀들 플래터">           
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/28.png?raw=true" width="50%" height="50%" alt="헤드 디스크암">   
>
>| 구성 요소            | 설명                                         |
>| ---------------- | ------------------------------------------ |
>| **플래터(Platter)** | 원판 형태로 데이터를 저장하는 자기 디스크                    |
>| **헤드(Head)**     | 데이터를 읽고 쓰는 장치로, 플래터 위를 아주 가깝게 이동하며 동작      |
>| **스핀들(Spindle)** | 플래터를 회전시키는 축 역할                            |
>| **디스크 암(Arm)**   | 헤드를 이동시키는 기계적 팔                            |
>| **디스크 모터**       | 디스크를 고속으로 회전시킴 (대표적으로 7200RPM 또는 15000RPM) |

***

> **하드디스크의 데이터 구조**
> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/29.png?raw=true" width="50%" height="50%" alt="섹터">  
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/30.png?raw=true" width="50%" height="50%" alt="실린더"> 
> 
>| 용어                            | 설명                                 |
>| ----------------------------- |------------------------------------|
>| **트랙(Track)**          | 플래터의 동심원 형태의 원형 경로                 |
>| **섹터(Sector)** | 트랙을 나눈 조각, 하나의 섹터는 일반적으로 512바이트    |
>| **블록(Block):**      | 여러 섹터를 묶은 단위                       |
>| **실린더(Cylinder):**      | 여러 플래터의 동일한 트랙 위치를 수직으로 연결한 논리적 단위 |

***

> **하드디스크의 동작 원리**
> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/31.png?raw=true" width="50%" height="50%" alt="탐색시간"> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/32.png?raw=true" width="50%" height="50%" alt="회전지연"> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/33.png?raw=true" width="50%" height="50%" alt="전송시간">
> 
> 
>| 용어                            | 설명                                  |
>| ----------------------------- | ----------------------------------- |
>| **탐색 시간(Seek Time)**          | 헤드가 목표 트랙으로 이동하는 시간                 |
>| **회전 지연(Rotational Latency)** | 플래터가 회전하여 데이터가 헤드 아래에 올 때까지 기다리는 시간 |
>| **전송 시간(Transfer Time)**      | 데이터를 컴퓨터로 전달하는 시간                   |

***

### 플래시 메모리 (Flash Memory)

> **플래시 메모리**는 **전기적으로 데이터를 읽고 쓰는 반도체 기반의 저장장치**이다.     
> 하드디스크에 비해 빠른 속도와 작은 크기 덕분에 아래와 같은 다양한 저장 장치에 사용된다.    
> 우리가 흔히 사용하는 USB 드라이브, SD 카드, SSD가 모두 플래시 메모리 기반의 보조기억장치이다.    
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/34.png?raw=true" width="50%" height="50%" alt="플래시메모리">

***

> 대부분의 저장 장치는 NAND 플래시를 사용한다.   
> 일반적으로 플래시 메모리라고 하면 NAND 플래시를 의미한다.
> 
> | 종류           | 설명             | 특징                        |
> | ------------ | -------------- | ------------------------- |
> | **NAND 플래시** | NAND 게이트 기반 회로 | 저장장치(SSD, USB 등)에 주로 사용   |
> | **NOR 플래시**  | NOR 게이트 기반 회로  | 프로그램 코드 저장에 적합 (읽기 속도 빠름) |


***

> **셀(Cell)** 기반 저장 빙식  
> 셀이란 플래시 메모리에서 데이터를 저장하는 가방 작은 단뒤이다.       
> 저장 용량과 효율성에 영향을 미친다.
>
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/35.png?raw=true" width="50%" height="50%" alt="SLC">     
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/36.png?raw=true" width="50%" height="50%" alt="MLC">     
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/37.png?raw=true" width="50%" height="50%" alt="TLC">     
> 
>
>| 타입                          | 설명            | 저장 비트 수 |
>| --------------------------- | ------------- | ------- |
>| **SLC (Single-Level Cell)** | 1개의 셀에 1비트 저장 | 1bit    |
>| **MLC (Multi-Level Cell)**  | 1개의 셀에 2비트 저장 | 2bit    |
>| **TLC (Triple-Level Cell)** | 1개의 셀에 3비트 저장 | 3bit    |
>
> 
>| 항목       | SLC  | MLC  | TLC  |
>| -------- | ---- | ---- | ---- |
>| 저장 비트 수  | 1bit | 2bit | 3bit |
>| 수명       | 김    | 보통   | 짧음   |
>| 읽기/쓰기 속도 | 빠름   | 보통   | 느림   |
>| 용량 대비 가격 | 높음   | 보통   | 낮음   |

***

> **플래시 메모리의 구조**
> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/38.png?raw=true" width="50%" height="50%" alt="페이지">     
>
> **페이지(Page)** : 셀들이 모인 가장 작은 읽기,쓰기 단위  
>> **Free** : 빈 상태, 쓰기 가능    
>> **Valid**: 유효한 데이터    
>> **Invalid**: 쓰레기 데이터 (덮어쓰기 불가)
> 
> **블록(Block)** : 여러 페이지가 모인 단위, 삭제는 블록 단위로만 가능     
> **플레인(Plane)** : 블록들이 모인 구조   
> **다이(Die)** : 플레인들이 모인 구조, 플래시 메모리의 기본 단위
 
***

> **가비지 컬렉션 (Garbage Collection)**  
> 
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/39.png?raw=true" width="50%" height="50%" alt="1">     
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/40.png?raw=true" width="50%" height="50%" alt="2">     
> <img src="https://github.com/projectmiluju/projectmiluju.github.io/blob/master/assets/images/41.png?raw=true" width="50%" height="50%" alt="3">
>
> Invalid 페이지가 쌓이면 새로운 블록으로 Valid 데이터만 복사 후 기존 블록을 삭제하는 정리 과정   
> SSD의 성능 유지와 수명 관리를 위한 핵심 기능

***
  
## 2 RAID의 정의와 종류 

***
