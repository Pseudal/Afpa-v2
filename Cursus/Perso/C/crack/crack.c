#include <stdio.h>
#include <stdlib.h>

void moyenne(int calc, int *nbrptr, int *resptr)
{
    int j;
    int nbr;
    int note[256] = {'\0'};
    int calcu;
    calcu = 0;
    
    j = 0;
    printf("Nombre de note de eleve %d :\n", *nbrptr + 1);
    scanf("%d", &nbr);
    
    while(j != nbr){
        printf("rentrez votre note (%d/%d)\n", j, nbr);
        scanf("%d", &note[j]);
        j++;
    }
    j = 0;
    while(note[j] != '\0'){
        calcu = calcu + (note[j] / nbr);
        j++;
    }
    *resptr = calcu;
}

int main()
{
    int top;
    int i;
    int j;
    int nbr; 
    int *nbrptr = &i;
    int nbrnote;
    int tabeleve[256] = {'\0'};
    int calc;
    int res;
    int *resptr = &res;
    res = 0;

    i = 0;
    printf("Nombre d'eleve\n");
    scanf("%d", &nbr);

    
    while(i != nbr){
        moyenne(calc, nbrptr, resptr);
        tabeleve[i] = res;
        i++;
    }
    i = 0;
    
    while(tabeleve[i] != '\0'){
        printf("eleve %d : %d\n", i + 1, tabeleve[i]);
        i++;
    } 
    return 0;
}
