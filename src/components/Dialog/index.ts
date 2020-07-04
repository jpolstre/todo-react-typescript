import React from 'react'
import ReactDOM from 'react-dom'
import Cmp from './Cmp'


export enum ETypeAction {
  REMOVE = 'remove',
  CANCEL = 'cancel',
  OK = 'ok'
}

export enum EType {
  FORM = 'form',
  CONFIRM = 'confirm',
  ALERT = ''
}

export interface IDialog {
  type?: EType,
  title: string,
  content: string,
  draggable?: boolean,

  onCancel: () => void
  onOk: () => void
}

// export interface ActionProps {
//   cancel: () => void
//   ok: () => void
// }

class Dialog {
  private props: IDialog

  private id: string

  constructor(props: IDialog) {
    this.props = props
    this.props.draggable = props.draggable || true
    this.props.type = props.type || EType.CONFIRM

    this.id = Math.random().toString()

    this.show()

  }

  private show() {
    // const notifyElem = React.createElement(Notifyelem, { notify: this.notify, removeNotify: this.removeNotify, id: this.id })

    // debe ser los mismos parametros que se reciven en Cmp.tsx
    const component = React.createElement(Cmp, { ...this.props })

    const div = document.createElement('div')

    div.style.cssText = `position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);z-index: 10;`

    div.id = this.id

    const root = document.getElementById('root')
    if (root) {

      const backCover = document.createElement('div')
      backCover.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      opacity: 0.6;
      width: 100vw;
      height: 100vh;
      z-index: 0;`
      backCover.classList.add('back-cover')

      document.body.appendChild(backCover)

      root.appendChild(div)

      if (this.props.draggable) {
        let isDragging = false

        root.addEventListener('mousedown', (e: MouseEvent) => {
          this.onMouseDown(e, div, isDragging)
        })
      }

      // div.append.
      ReactDOM.render(component, div)

    }




    // ReactDOM.render(component, document.getElementById('root'))
  }


  private onMouseDown(event: MouseEvent, dragElement: HTMLDivElement, isDragging: boolean) {

    // let dragElement = document.body.closest('.draggable');
    if (!dragElement) return;

    event.preventDefault();

    dragElement.ondragstart = function () {
      return false;
    };

    let shiftX: number, shiftY: number;

    startDrag(dragElement, event.clientX, event.clientY);

    function onMouseUp(event: MouseEvent) {
      finishDrag();
    };

    function onMouseMove(event: MouseEvent) {
      moveAt(event.clientX, event.clientY);
    }

    // on drag start:
    //   remember the initial shift
    //   move the element position:fixed and a direct child of body
    function startDrag(element: HTMLDivElement, clientX: number, clientY: number) {
      if (isDragging) {
        return;
      }

      isDragging = true;

      document.addEventListener('mousemove', onMouseMove);
      element.addEventListener('mouseup', onMouseUp);

      shiftX = clientX - element.getBoundingClientRect().left;
      shiftY = clientY - element.getBoundingClientRect().top;
      if (element) {

        element.style.position = 'fixed'
        element.style.transform = 'none'

      }


      moveAt(clientX, clientY);
    };

    function finishDrag() {
      if (!isDragging) {
        return;
      }
      isDragging = false;

      dragElement.style.top = parseInt(dragElement.style.top) + window.pageYOffset + 'px';
      dragElement.style.position = 'absolute';

      document.removeEventListener('mousemove', onMouseMove);
      dragElement.removeEventListener('mouseup', onMouseUp);
    }

    function moveAt(clientX: number, clientY: number) {
      // new window-relative coordinates
      let newX = clientX - shiftX;
      let newY = clientY - shiftY;

      let newBottom = newY + dragElement.offsetHeight;

      if (newBottom > document.documentElement.clientHeight) {
        let docBottom = document.documentElement.getBoundingClientRect().bottom;

        let scrollY = Math.min(docBottom - newBottom, 10);

        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, scrollY);

        newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
      }

      if (newY < 0) {
        // scroll up
        let scrollY = Math.min(-newY, 10);
        if (scrollY < 0) scrollY = 0;

        window.scrollBy(0, -scrollY);
        newY = Math.max(newY, 0);
      }
      if (newX < 0) newX = 0;
      if (newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
        newX = document.documentElement.clientWidth - dragElement.offsetWidth;
      }

      dragElement.style.left = newX + 'px';
      dragElement.style.top = newY + 'px';
    }

  }


  // private remove(id: string) {
  //   console.log('hide', id)
  //   const element = document.getElementById(id)

  //   if (element) {
  //     element.classList.add('hide')
  //     setTimeout(() => {
  //       ReactDOM.unmountComponentAtNode(element)
  //       element.remove()
  //     }, 300)
  //   }

  // }

  // private ok() {
  //   this.props.onOk()
  // }

  // private cancel() {
  //   this.props.onCancel()

  // }








}

export default Dialog