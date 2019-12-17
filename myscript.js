function clearAd(){
	if(document.getElementById("kp_box_57")){
		document.getElementById("kp_box_57").remove()
		console.log('广告已清除')
	}else{
		setTimeout(()=>{
			clearAd()
		},1000)
	}
}
clearAd()