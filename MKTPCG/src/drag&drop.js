// Source: https://web.dev/drag-and-drop/

var dragSrcEl = null;

function handleDragStart(e) {
  this.style.opacity = '0.75';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = 'move';
  return false;
}

function handleDragEnter(e) {
  this.classList.add('over');
}

function handleDragLeave(e) {
  this.classList.remove('over');
}

function handleDrop(e) {
  if (e.stopPropagation) {
    e.stopPropagation();
  }

  if (dragSrcEl != this) {
    //it needs to swap an element to the direct spot if it after the original element, but before the original element if it is higher in the list
    let swapNode = this.innerHTML;
    let indexes = [0, 0];
    let type = dragSrcEl.id.substring(dragSrcEl.id.indexOf('_') + 1);
    this.parentElement.childNodes.forEach(function (item, i) {
      switch (item.innerHTML) {
        case dragSrcEl.innerHTML:
          indexes[0] = i;
          break;
        case swapNode:
          indexes[1] = i;
          break;
      }
    });

    (indexes[0] < indexes[1]) ? this.parentElement.insertBefore(dragSrcEl, this.nextSibling) : this.parentElement.insertBefore(dragSrcEl, this)

    let items = document.querySelectorAll('.dkgPanel');
    items.forEach(function (item) {
      item.style.opacity = '1';
      item.classList.remove('over');
    });
    updateBoxes(type);

  }
  return false;
}