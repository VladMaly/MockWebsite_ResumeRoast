var postCounter = 0;
// 0 for display both image and text
var currentFilter = 0;

function textPostSubmit() {
    var insertText = document.getElementById("inputPostText").value;
    insertText.localeCompare("Hello") == 0 ? window.alert("Morning user") : createMessage(insertText, true); 
}

function imgPostSubmit() {
    var insertImg = document.getElementById("inputPostImg").value;
   	createMessage(insertImg, false); 
}

function createMessage(insertField, isTextMessage) {
	var section = document.createElement("DIV");
	section.className += "post";
	section.className += " test--post";
	if (isTextMessage) {
		currentFilter == 0 || currentFilter == 1 ? section.style.display = "" : section.style.display = "none";
		section.className += " postText";
		var para = document.createElement("p");
		para.innerHTML = insertField;
		para.className += "overflowText";
		para.className += " test--post_content";
	}
	else {
		currentFilter == 0 || currentFilter == 2 ? section.style.display = "" : section.style.display = "none";
		section.className += " postImg";
		// Create img with insertField as the ref link
		//<img class="marginLeftHeader profilePhoto" src="kristen.jpg">
		var img = document.createElement("img");
		img.className += " postImgElement";
		img.setAttribute('src', insertField);
	}
	var article = document.createElement("article");
	article.className += "postBottom";

	var button = document.createElement("button");
	button.className += "postLikeButton";
	button.innerHTML = "Like Button";
	button.className += " test--like_button";
	/*button.addEventListener("click", function(e) {
    	upVote(postCounter);
	}, false);*/
	var postNumberString = "post" + postCounter;
	/*button.addEventListener("click", function(e) {
    	upVote(postNumberString);
	}, false);*/
	button.onclick = function() {
		upVote(postNumberString);
	};

	var span = document.createElement("span");
	span.innerHTML = "Like counter:";

	var spanCounter = document.createElement("span");
	spanCounter.innerHTML = "0";
	spanCounter.setAttribute("id", "post" + postCounter)
	spanCounter.className += "test--like_count";
	postCounter++;

	// Add elements from depth first up
	article.appendChild(button);
	article.appendChild(span);
	article.appendChild(spanCounter);
	isTextMessage ? section.appendChild(para) : section.appendChild(img);
	section.appendChild(article);

	// finally output created structure
	var postContainer = document.getElementById("postContainer");
	postContainer.appendChild(section);
	
	/*var postContainer = document.getElementById("postContainer");
	postContainer.insertAdjacentHTML('beforeend', '<div id="two">two</div>');*/
}

/*<section class="postText post">
    <p class="overflowText">Posted Text HERE</p>
    <article class="postBottom">
        <button class="postLikeButton">Like Button</button><span>Like counter:</span><span id="post1">0</span>
    </article>
</section>*/

function upVote(postNumberString) {
    var currentUpVote = (document.getElementById(postNumberString)).innerHTML;
	var nowUpVote = parseInt(currentUpVote);
	nowUpVote++;
    document.getElementById(postNumberString).innerHTML = nowUpVote;
}

function onChangeSelectFilter() {
	var value = 0;
	var e = document.getElementById("filterPosts");
	value = e.value;
	var eImage = document.getElementsByClassName("postImg");
	var eText = document.getElementsByClassName("postText");

	if (value == 1) {
		changeDisplay(eImage, "none");
		changeDisplay(eText, "");
		currentFilter = 1;
	}
	else if (value == 2) {
		changeDisplay(eImage, "");
		changeDisplay(eText, "none");
		currentFilter = 2;
	}
	else if (value == 0) {
		changeDisplay(eImage, "");
		changeDisplay(eText, "");
		currentFilter = 0;
	}
}

function changeDisplay(elem, value) {
	for (var i = 0; i < elem.length; i++) {
		elem[i].style.display = value;
	}
}