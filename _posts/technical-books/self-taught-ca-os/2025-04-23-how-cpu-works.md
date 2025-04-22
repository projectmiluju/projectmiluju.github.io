---
title: "Chapter04 CPU의 작동 원리"
excerpt: "혼자 공부하는 컴퓨터 구조 + 운영체제"

categories:
  - Self-Taught Computer Architecture and Operating Systems
tags:
  - [tag1, tag2]

permalink: /self-taught-ca-os/hcpu/

toc: true
toc_sticky: true

date: 2025-04-23
last_modified_at: 2025-04-23
---


## 1 ALU와 제어장치
***
## 2 레지스터 
***
## 3 명령어 사이클과 인터럽트

***

### 명령어 사이클

> 프로그램은 수많은 명령어로 이루어져 있고, CPU는 이 명령어들을 하나씩 실행한다.    
> 이때 프로그램 속 각각의 명령어들은 일정한 주기가 반복되며 실행되는데    
> 이 주기를 **명령어 사이클** 이라고 한다.

> **인출 사이클** : 메모리에 있는 명령어를 CPU로 가져오는 단계


> **실행 사이클** : CPU로 가져오는 명령어를 실행하는 단계
 

> **간접 사이클** : 명령어를 실행하기 위해서는 메모리에 접근을 한 번 더 하는 단계

***

### 인터럽트

> **동기 인터럽트**


> **비동기 인터럽트**