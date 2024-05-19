//your code here
body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.container {
    display: grid;
    grid-template-columns: repeat(3, 150px);
    gap: 10px;
}

.draggable {
    width: 150px;
    height: 150px;
    background-size: cover;
    background-position: center;
}

#div1 { background-image: url('image1.jpg'); }
#div2 { background-image: url('image2.jpg'); }
#div3 { background-image: url('image3.jpg'); }
#div4 { background-image: url('image4.jpg'); }
#div5 { background-image: url('image5.jpg'); }
#div6 { background-image: url('image6.jpg'); }