var doc = String.raw`

# test repository

# Header1
## Header2
### Header3
#### Header4
##### Header5
###### Header6

> "quotation"
>>入れ子1
>>>入れ子2
>>>>入れ子3
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>入れ子∞

"クオーテーション内では
改行されない"

* Disc1
    + Disc1-1
- Disc2

1. Decimal1-1
    2. Decimal1-2  
2. Decimal2 

<dl>
  <dt>Name</dt>
  <dd>Definition</dd>
</dl> 

- [ ] Checkbox
- [x] Checked

- - -
Horizontal Rules
***  
3つ以上の
*   *   *   *   *
ハイフン、アスタリスク、アンダースコアを
___
ならべる
_ _ _ _ _ _

<https://atcoder.jp/>    
[site name](https://atcoder.jp/ "title")

_Italic_
__Bold__
*Italic*
**Bold**
~~打ち消し~~


![ダミー画像](http://placehold.it/100 "ダミー画像")

~inline~

~~~cpp
//syntax highlight
#include<iostream>
int main(){
    std::cout<<"Hello World!"<<std::endl;
    return 0;
}
~~~

| Left align | Right align | Center align |
|:-----------|------------:|:------------:|
| This       |        This |     This     |
| column     |      column |    column    |
| will       |        will |     will     |
| be         |          be |      be      |
| left       |       right |    center    |
| aligned    |     aligned |   aligned    |
| ~inline~   |     ~~*Bold*~~ |   can be used    |

\#Markdownのエスケープ



`;