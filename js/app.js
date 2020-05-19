Array.from(document.getElementsByTagName('p')).forEach((element) => {
  element.addEventListener('mousedown', (e) => {
    const targetId = e.target.id

    if (targetId.includes('-button-')) {
      const type = targetId.slice(0, targetId.indexOf('-'));
      const target = type === 'spotify' ? 'soundcloud' : 'spotify'
      const number = targetId.slice(targetId.length - 2, targetId.length);
      const currClasses = document.getElementById(`${type}-play-${number}`).className;
      const hiddenClasses = document.getElementById(`${target}-play-${number}`).className;

      if (currClasses.includes('hidden')) {
        document.getElementById(`${target}-play-${number}`).className += (' hidden');
        document.getElementById(`${type}-play-${number}`).className = hiddenClasses.replace(' hidden', '');
        document.getElementById(`${target}-button-${number}`).className = document.getElementById(`${target}-button-${number}`).className.replace(' active', '');
        document.getElementById(`${type}-button-${number}`).className += ' active';
      }
    }
  })
})