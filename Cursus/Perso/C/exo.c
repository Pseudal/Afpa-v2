#include <stdio.h>
#include <stdlib.h>

int main()
{
    char a [25] = "Paris";
    char v [25] = "truc";
    int i;
    int j;
    
    i = 0;
    j = 0;
    
    printf("Capitale de france ?\n");    
        while(i != 3){
            scanf("%s", &v);
            while(a[j] == v[j]){
                if(j == 24){
                    printf("Bravo\n");
                    return (0);
                }
                j++;
            }
                printf("perdu, essaye encore\n");
                j = 0; 
                i++;
            }
    if(i == 3){
        printf("Perdu!!!");
        exit(0);
    }
           
    printf("Bravo!");
    return (0);
}