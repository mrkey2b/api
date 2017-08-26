#!/bin/sh

ip=$(curl -s https://www.nitrogame.net/www/ip/userapi/start)
echo "My IP address is: $ip"

<script type="application/javascript">
	function getip(json){
		document.write("My IP address is: ", json.ip);
	}
</script>

<script type="application/javascript" src="https://www.nitrogame.net/jsonip?callback=getip"></script>
back --
