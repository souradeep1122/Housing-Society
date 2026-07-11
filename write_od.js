const fs=require("fs");const html=fs.readFileSync("od_content.txt","utf8");fs.writeFileSync("owner-dashboard.html",html,"utf8");console.log("done",fs.statSync("owner-dashboard.html").size);
