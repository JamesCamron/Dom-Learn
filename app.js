  window.onload = function(){
    main();
  };

  function main(){
    // const div = document.createElement('div');

	// const h1 = document.createElement('h1');
	// h1.innerText = 'Hello World';

	// const p = document.createElement('p');
	// p.innerText = `Officia duis anim ea ullamco proident et adipisicing nisi ad labore. Mollit id id anim velit laborum cupidatat aute veniam. Exercitation non elit magna elit aliquip dolore excepteur reprehenderit ea id dolor. Adipisicing pariatur amet mollit excepteur nulla dolore deserunt ipsum sit tempor magna dolore commodo mollit.`;

	// div.appendChild(h1);
	// div.appendChild(p);

	// document.body.appendChild(div);

    const app = Container([
        Text('h1','Hellow World'),
        Text('p','This is a simple pragraph'),
        Container([Text('h3','WOW'),Text('h3','NICE')],{
            display:'flex',
            gap:'2rem'
        })
    ]);
    document.getElementById('root').appendChild(app);
  };

function Container(children,style={}){
    const div = document.createElement('div');
    Object.keys(style).map((key) => {
        div.style[key] = style[key]
    })
    children.forEach((child) => div.appendChild(child));
    return div;
};


function Text(tag,value){
    const text = document.createElement(tag);
    text.innerText = value;
    return text;
}