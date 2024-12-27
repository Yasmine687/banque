function alphaesp(ch)
{
    ch=ch.toUpperCase()
    test=true
    for(let i=0;i<ch.length;i++)
    {
        if((ch[i]<'A'|| 'Z'<ch[i]) && ch[i]!=' ')
        {
            test=false
            break
        }
    }
    return test
}
function alpha(ch)
{
    ch=ch.toUpperCase()
    test=true
    for(let i=0;i<ch.length;i++)
    {
        if(ch[i]<'A'|| 'Z'<ch[i])
        {
            test=false
            break
        }
    }
    return test
}
function num(ch)
{
    test=true
    for(let i=0;i<ch.length;i++)
    {
        if(ch[i]<'0'|| '9'<ch[i])
        {
            test=false
            break
        }
    }
    return test
}

function date()
{
    var d=new Date()
    var j=d.getDate()
    if(j<10)
    {
        j='0'+j
    }
    var m=d.getMonth()+1
    if(m<10)
    {
        m='0'+m
    }
    var y=d.getFullYear()
    var h=d.getHours()
    if(h<10)
    {
        h='0'+h
    }
    var min=d.getMinutes()
    
    if(min<10)
    {
        min='0'+min
    }
    var s=d.getSeconds()
    if(s<10)
    {
        s='0'+s
    }
    var date=j+"/"+m+"/"+y+" "+h+":"+min+":"+s
    document.getElementById("dte").innerHTML="Date opération: "+date
    setTimeout("date()",1000)

}
function motdepasse(ch)
{   
    var nbAZ=0
    var nb19=0
    var nbaz=0
    var nb=0
    var tst=true
    for(let i=0; i<ch.length ;i++ )
    {
        if (ch[i]<'A'|| 'Z'<ch[i])
        {
            nbAZ=nbAZ+1
        }
        else
        {
            if (ch[i]<'1'|| '9'<ch[i])
            {
                nb19=nb19+1
            }  
            else
            {
                if (ch[i]<'a'|| 'z'<ch[i])
                {
                    nbaz=nbaz+1
                }
                else
                {
                    nb=nb+1
                }
            }
        }
    }
    if (nbAZ<2 || nb19<2 || nbaz<2 || nb<2)
    {
        tst=false
    }
    return tst
}
function alphanum(ch)
{
    
    test=true
    for(let i=0;i<ch.length;i++)
    {
        if((ch[i]<'0'|| '9'<ch[i]) && (ch[i]<'A'|| 'Z'<ch[i]) )
        {
            test=false
            break
        }
    }
    return test
}
function verif1()
{
    var a1=document.getElementById("ncin").value
    if (a1.length!=8 || (a1[0]!=0 && a1[0]!=1 ) || !num(a1))
    {
        alert("error recrivez votre NCIN")
        return false
    }
    var a2=document.getElementById("nom").value
    if (a2=="" || !alphaesp(a2))
    {
        alert("error recrivez votre nom")
        return false
    }
    
    var a3=document.getElementById("pre").value
    if (a3.length>=30 || !alphaesp(a3))
    {
        alert("error recrivez votre prenom")
        return false
    }
    var a4=document.getElementById("mdp").value
    if (a4.length!=4 || !num(a4))
    {
        alert("error recrivez votre mot de passe svp")
        return false
    }
    var a5=document.getElementById("mil").value
    var ch1=a5.indexOf("@")
    var ch2=a5.indexOf(".")
    if(a5=="" || ch1==-1 || ch2==-1 || a5.length<10  || ch2<ch1 )
    {
        alert("la form de E-mail et false")
        return false
    } 
    var s1=a5.substring(0,ch1)
    var s2=a5.substring(ch1+1,ch2)
    var s3=a5.substring(ch2+1,a5.length())
    if(!alphanum(s1) || s1.length<3 )
    {
        
        alert("la form de premiere chaine et false")
        return false
    }
    if(!alpha(s2) ||s2.length<3)
    {
        
        alert("la form de 2eme chaine et false")
        return false
    }
    if(!alpha(s3) || s3.length<2 || s3.length>3)
    {
        
        alert("la form de 3eme chaine et false")
        return false
    }
    
    var a6=document.getElementById("cp1").checked
    var a7=document.getElementById("cp2").checked
    if(!a6 && !a7)
    {
        alert("le champ de type de compte et obligatoire")
        return false
    }
}
function verif2()
{
    
    var a1=document.getElementById("rib").value
    if (a1.length!=8 || !num(a1))
    {
        alert("error recrivez votre Rib")
        return false
    }
    var a2=document.getElementById("mdp").value
    if (a2.length!=4 || !num(a2))
    {
        alert("error recrivez votre mot de passe svp")
        return false
    }
    var a3=document.getElementById("op").selectedIndex
   if(a3<1)
   {
       alert("il faut choisir votre type d'Opération")
       return false 
   }
    var a4=document.getElementById("mnd").value
    if ( a4=="" || a4<10 || isNaN(a4))
    {
        alert("error recrivez votre montant")
        return false
    }
}