#include<stdio.h>
char hyouka(int tokuten);

// mainFunction
int main(void){    //成績の入力、成績の表示
    
    int tokuten [5] , i, f, varFlag;
    for(i=0; i<5; i++){
        printf("テストの点数を入力=>");
        scanf("%d" , &tokuten[i]);
    }
    for(f=0; f<5; f++){
        varFlag = hyouka(tokuten[f]);
        if(varFlag != 0){
            if(varFlag == 1){
                printf("D\n");
            }else if(varFlag == 2){
                printf("C\n");
            }else if(varFlag == 3){
                printf("B\n");
            }else if(varFlag == 4){
                printf("A\n");
            }else if(varFlag == 5){
                printf("S\n");
            }
        }else{
            printf("none");
        }
    }
    
    return 0;
}


// hyoukaFunchtion
char hyouka(int tokuten){    //成績判定
    int flag = 0;
    // 60未満：D
    if(60 > tokuten){
        flag = 1;
    }
    // 60以上70未満：C
    else if(60 <= tokuten && tokuten < 70){
        flag = 2;
    }
    // 70以上80未満：B
    else if(70 <= tokuten && tokuten < 80){
        flag = 3;
    }
    // 80以上90未満：A
    else if(80 <= tokuten && tokuten < 90){
        flag = 4;
    // 90以上：S
    }else if(90 <= tokuten){
        flag = 5;
    }
    return flag;

}
