import { useDndMonitor } from '@dnd-kit/core'
import React from 'react'

function DragOverlayWrapper() {
    useDndMonitor({
        onDragStart: (event) => {
            console.log("Drag Item");
        }
    })
  return (
    <div>DragOverlayWrapper</div>
  )
}

export default DragOverlayWrapper