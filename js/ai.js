
const loadAiData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    // const datas = data.data.tools;
    displayAiData(data.data.tools);
}
const displayAiData = (aiDatas) => {
    console.log(aiDatas);
    const aiContainer = document.getElementById('ai-container');
    // aiDatas = aiDatas.slice(0, 6);

    // disply all AI property
    const showALl = document.getElementById('show-all');
    if (aiDatas.length > 6) {
        //disply only 6 ai property
        aiDatas = aiDatas.slice(0, 6);
        showALl.classList.remove('d-none')
    }
    else {
        showALl.classList.add('d-none');
    }
    // display ai property
    aiDatas.forEach(aiData => {
        // console.log(aiData);
        const aiDiv = document.createElement('div');
        aiDiv.classList.add = 'col';
        aiDiv.innerHTML = `
        <div class="col">
            <div class="card p-4">
                <img src="${aiData.image ? aiData.image : 'image Not Found'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${aiData.name}</h5>
                    <h6 class="card-text">Feature: </h6>
                    <ul id="list-items">
                        <li>${aiData.features[0]}</li>
                        <li>${aiData.features[1]}</li>
                    </lu>                                 
                </div>
                <button onclick="loadAiDetails(${aiData.id})" id="" class="btn btn-primary ms-2" type="button" data-bs-toggle="modal" data-bs-target="#aiDetailModal">Details</button>
           </div>
        </div>
        `;
        aiContainer.appendChild(aiDiv);
    });
}

document.getElementById('btn-show-all').addEventListener('click', function () {

})

const loadAiDetails = async (id) => {
    // const url = `https://openapi.programming-hero.com/api/ai/tool/01`;
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displyAiDetails(data.data);
}
const displyAiDetails = (ai) => {
    console.log(ai);
    const modalContainer = document.getElementById('aiDetailModalBody');
    modalContainer.innerHTML = `
    <div class="modal-card col mb-4 modal-card">
        <div class="card ">
            <div class="card-body">
                <h5 class="card-title">${ai.description}</h5>
                <div class="list-items">
                    <div>
                        <h6 class="card-text">Feature: </h6>
                        <ul id="list-items">
                            <li>${ai.features[1].feature_name}</li>
                            <li>${ai.features[2].feature_name}</li>
                            <li>${ai.features[3].feature_name}</li>
                            </lu>
                    </div>
                    <div>
                        <h6 class="card-text">Integrations: </h6>
                        <ul id="list-items">
                            <li>${ai.integrations[0]}</li>
                            <li>${ai.integrations[1]}</li>
                            <li>${ai.integrations[2]}</li>
                            </lu>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    `;
    // <img src="..." class="card-img-top" alt="...">
}

loadAiData();
