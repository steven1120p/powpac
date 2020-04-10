function FindProxyForURL(url, host)
{
    url  = url.toLowerCase();
    host = host.toLowerCase();

    if (isInNet(dnsResolve(host), "127.0.0.0", "255.255.255.0"
      || isInNet(dnsResolve(host), "172.16.0.0",  "255.240.0.0")
      || isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")
     
    ) {
      return "DIRECT";
    }

    if (shExpMatch(url,"*twitter*")
      || shExpMatch(url,"*google*")
      || shExpMatch(url,"*facebook*")
      || shExpMatch(url,"*blogspot*")
      || shExpMatch(url,"*youtube*")
      || shExpMatch(url,"*gstatic*")
      || shExpMatch(url,"*ytimg*")
      || shExpMatch(url,"*ggpht*")
      || shExpMatch(url,"*github*")
    ) {
       return "PROXY powerline213.3322.org:1064";
    }
    return 'DIRECT';
}
