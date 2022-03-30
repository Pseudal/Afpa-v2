#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a;
    int b;
    int c;
    int i;
    
    a = 0;
    b = 0;
    c = 0;
    i = 0;
    
    printf("rentrez un nombre pour avoir un joli pas carré\n");
    scanf ("%d", &a);
    c = a * a;
    while(i != a){
        i++;      
        if (b == c)
        {
            printf("Voila ton pas carré, Press ENTER key to quit\n");  
            system("pause");  
            return 0;
        }
          
        else if (i == a){
            i = 0;
            b++;
            printf("*\n");
        }
        
        else{
            b++;
            printf("*");
        }
    }
}