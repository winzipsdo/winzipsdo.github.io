(function metaInit() {
  const metaName = document.createElement('meta');
  metaName.itemprop = 'name';
  metaName.content = 'Here Neal';
  document.head.append(metaName);

  const metaImg = document.createElement('meta');
  metaImg.itemprop = 'image';
  metaImg.content = 'https://camo.githubusercontent.com/5f83af8b8a360d4144adc5d7b87505283945bd9e/68747470733a2f2f696d672e797a63646e2e636e2f76616e742f6c6f676f2e706e67';
  document.head.append(metaImg);

  const metaDesc = document.createElement('meta');
  metaDesc.itemprop = 'description';
  metaDesc.name = 'description';
  metaDesc.content = '随时过来发一会儿呆';
  document.head.append(metaDesc);
}());
