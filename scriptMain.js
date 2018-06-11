// Diese funktion Scrollt zum Seitenanfang
function nachOben()
{
    document.body.scrollTop = 0; // Apple
    document.documentElement.scrollTop = 0; // Normale Menschen
}

// Diese Funktion wird aufgerufen sobald eine CheckBox gechecked oder unchecked wird.
// esw wird geprueft, welche Produkte ausgewaehlt wurden und der Gesamtpreis aktualisiert.
function warenkorbUpdate()
{
    var warenkorbSummeVar = document.getElementById('warenkorbSummeID');
    var zahlen = 0;
    if(document.getElementById('c1').checked)
    {
        zahlen = zahlen.valueOf() + 8.99;
    }
    if(document.getElementById('c2').checked)
    {
        zahlen = zahlen.valueOf() + 7.99;
    }
    if(document.getElementById('c3').checked)
    {
        zahlen = zahlen.valueOf() + 10.99;
    }
    if(document.getElementById('c4').checked)
    {
        zahlen = zahlen.valueOf() + 8.99;
    }
    if(document.getElementById('c5').checked)
    {
        zahlen = zahlen.valueOf() + 6.99;
    }
    if(document.getElementById('c6').checked)
    {
        zahlen = zahlen.valueOf() + 11.99;
    }
    zahlen = zahlen.toFixed(2);
    warenkorbSummeVar.innerHTML = zahlen;
}
// Gibt an ob der Gutschein schon benutzt wurde
var gutscheinSchonBenutzt = 0;
// Wenn der Gutscheincode 12345 eingegeben wird werden 10% vom Preis abgezogen
function gutscheinUpdate()
{
    var warenkorbSummeVar = document.getElementById('warenkorbSummeID');
    var ZuZahlen = warenkorbSummeVar.innerHTML;
    var gutscheinCode = prompt("Gutscheincode eingeben:", "");
    if (gutscheinCode == null || gutscheinCode == "" || gutscheinCode != "12345" || gutscheinSchonBenutzt == 1) 
    {
        document.getElementById("gutscheinButton").style.backgroundColor = "red";
    } 
    else 
    {
        ZuZahlen = ZuZahlen*0.9;
        ZuZahlen = ZuZahlen.toFixed(2);
        document.getElementById("gutscheinButton").style.backgroundColor = "green";
        gutscheinSchonBenutzt = 1;
    }
    warenkorbSummeVar.innerHTML = ZuZahlen;
}