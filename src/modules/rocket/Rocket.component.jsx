import React, { useState } from 'react';
import { Sheet } from 'react-modal-sheet';

export default function Rocket({ rocketInfo, isOpen, ...props }) {
  const [open, setOpen] = useState(isOpen);
  return (
    <>
      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <p>Modal</p>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
