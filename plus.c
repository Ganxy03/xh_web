#include <reg51.h>
#include "lcd.h"
typedef unsigned char uint8;
typedef unsigned int uint16;
sbit led = P3^7;
sbit beep = P2^0;
uint8 key,num;
uint fuhao;
uint flag;
long a,b,c,d;
uint8 k;
uint8 biao;
uint8 dat1[]={1,2,3,0x2b-0x30,4,5,6,0x2d-0x30,7,8,9,0x2a-0x30};
void delay(uint16 i)
{
	while(i--);
}

void lcdwrc(uint8 c)
{
	LcdWriteCom(c);
}
void lcdwrd(uint8 dat)
{
	lcdWirteData(dat);
}
void lcd_init()
{
	LcdInit();
	key=0;
	num=0;
	flag=0;
	fuhao=0;
	a=0;
	b=0;
	c=0;
	d=0;
	biao=0;
	led=0;
}
void keyscan()
{
	P1=0xfe;
	if(P1!=0xfe)
	{
		delay(1000);
		if(P1!=0xfe)
		{
			key=P1&0xf0;
			switch(key)
			{
				case 0xe0: num=0;break;
				case 0xd0: num=1;break;
				case 0xb0: num=2;break;
				case 0x70: num=3;break;
			}
		}
		while(P1!=0xfe);
		if(num==0||num==1||num==2)
		{
			if(flag==0)
			{
                a=a*10+dat1[num]
            } else {
                b=b*10+dat1[num];
            }
		}
		if(num==3)
		{
			flag=1;
			fuhao=1;
		}
		lcdwrd(0x30+dat1[num]);
	}
	P1=0xfd;
	if(P1!=0xfd)
	{
		delay(1000);
		if(P1!=0xfd)
		{
			key=P1&0xf0;
			switch(key)
			{
				case 0xe0: num=4;break;
				case 0xd0: num=5;break;
				case 0xb0: num=6;break;
				case 0x70: num=7;break;
			}
		}
		while(P1!=0xfd);
		if(num==4||num==5||num==6)
		{
			if(flag==0)
			{
                a=a*10+dat1[num];
            } else {
                b=b*10+dat1[num];
            }
        } else {
            flag=1;
            fuhao=2;
        }
        lcdwrd(0x30+dat1[num]);
    }
    P1=0xfb;
    if(P1!=0xfb)
    {
        delay(1000);
        if(P1!=0xfb)
        {
            key=P1&0xf0;
            switch(key)
            {
            case 0xe0: num=8;break;
            case 0xd0: num=9;break;
            case 0xb0: num=10;break;
            case 0x70: num=11;break;
            }
        }
        while(P1!=0xfb);
        if(num==8||num==9||num==10)
        {
            if(flag==0)
            {
                a=a*10+dat1[num];
            } else {
                b=b*10+dat1[num];
            }
        } else {
            flag=1;
            fuhao=2;
        }
        lcdwrd(0x30+dat1[num]);
    }
    P1=0xf7;
    if(P1!=0xf7)
    {
        delay(1000);
        if(P1!=0xf7)
        {
            key=P1&0xf0;
            switch(key)
            {
            case 0xe0: num=12;break;
            case 0xd0: num=13;break;
            case 0xb0: num=14;break;
            case 0x70: num=15;break;
            }
        }
        while(P1!=0xf7);
        switch (num)
        {
            case 12:
                if(flag==0)
                {
                    a=a*10+dat1[num];
                    lcdwrd(0x30);
                } else {
                    b=b*10+dat1[num];
                    lcdwrd(0x30);            
                }
                break;
            case 13:
                lcdwrc(0x01);
                a=0;
                b=0;
                flag=0;
                fuhao=0;
                break;
            case 14:
                if(fuhao==1)
                {
                    lcdwrc(0x4f+0x80);
                    lcdwrc(0x04);
                    c=a+b;
                    while(c!=0)
                    {
                        lcdwrd(0x30+c%10);
                        c=c/10;
                    }
                    lcdwrd(0x3d);
                    a=0;
                    b=0;
                    c=0;
                    flag=0;
                    fuhao=0;
                }
                if(fuhao==2)
                {
                    lcdwrc(0x4f+0x80);
                    lcdwrc(0x04);
                    if(a>b)
                        c=a-b;
                    else
                        c=b-a;
                    while(c!=0)
                    {
                        lcdwrd(0x30+c%10);
                        c=c/10;
                    }
                    if(a<b) lcdwrd(0x2d);
                    lcdwrd(0x3d);
                    a=0;
                    b=0;
                    c=0;
                    flag=0;
                    fuhao=0;
                }
                if(fuhao==3)
                {
                    lcdwrc(0x4f+0x80);
                    lcdwrc(0x04);
                    c=a*b;
                    while(c!=0)
                    {
                        lcdwrd(0x30+c%10);
                        c=c/10;
                    }
                    lcdwrd(0x3d);
                    a=0;
                    b=0;
                    c=0;
                    flag=0;
                    fuhao=0;
                }
                if(fuhao==4)
                {
                    k=0;
                    lcdwrc(0x4f+0x80);
                    lcdwrc(0x04);
                    c=(long)(((float)a/b)*1000);
                    while(c!=0)
                    {
                        k++;
                        lcdwrd(0x30+c%10);
                        c=c/10;
                        if(k==3)
                        {
                            lcdwrd(0x2e);
                            k=0;
                        }
                    }
                    if(a/b<0)
                    {
                        lcdwrd(0x30);
                    }
                    lcdwrd(0x3d);
                    a=0;
                    b=0;
                    c=0;
                    flag=0;
                    fuhao=0;
                }
                break;
            case 15:
                flag=1;
                fuhao=4;
                lcdwrd(0x2f);
                break;
        }
    }
}

void main()
{
    lcd_init();
    while(1) 
    {
        keyscan
    }
}