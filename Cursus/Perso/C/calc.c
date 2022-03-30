#include <stdio.h>
#include <stdlib.h>

int add(int nombre1, int nombre2)
{
    int ResDans2ndFonction;
    
    ResDans2ndFonction = nombre1 + nombre2;
    
    return(ResDans2ndFonction); /*renvoi la valeur dans res dans ma fonction main*/
    
}
int mult(int nombre1, int nombre2)
{
    int ResDans2ndFonction;
    
    ResDans2ndFonction = nombre1 * nombre2;
    
    return(ResDans2ndFonction); /*renvoi la valeur dans res dans ma fonction main*/
    
}
int sous(int nombre1, int nombre2)
{
    int ResDans2ndFonction;
    
    ResDans2ndFonction = nombre1 - nombre2;
    
    return(ResDans2ndFonction); /*renvoi la valeur dans res dans ma fonction main*/
    
}
int divi(int nombre1, int nombre2)
{
    int ResDans2ndFonction;
    
    ResDans2ndFonction = nombre1 / nombre2;
    
    return(ResDans2ndFonction); /*renvoi la valeur dans res dans ma fonction main*/
    
}
void viderStdin( void )
{
    int c = 0;
 
    while( (c=getchar())!= '\n' && c!=EOF );
}

int main()
{
    int nombre1;
    int nombre2;
    char operateur;
    int res;
    
    res = 0;
    
    printf("entrez votre premier nombre\n");
    scanf("%d", &nombre1);
    printf("entrez votre operateur (/ ou * ou - ou +)\n");
    scanf("%c", &operateur);
    viderStdin();
    printf("entrez votre deuxieme nombre\n");
    scanf("%d", &nombre2);

    if(operateur == '+')
        res = add(nombre1, nombre2); /*J'envois ici le calcul dans ma fonction calcul*/
    if(operateur == '*')
        res = mult(nombre1, nombre2); /*J'envois ici le calcul dans ma fonction calcul*/
    if(operateur == '-')
        res = sous(nombre1, nombre2); /*J'envois ici le calcul dans ma fonction calcul*/
    if(operateur == '/')
        res = divi(nombre1, nombre2); /*J'envois ici le calcul dans ma fonction calcul*/
    else{
        printf("erreur");
        return(0);
    }    
    printf("votre résultât est %d", res);
        
    return 0;
}