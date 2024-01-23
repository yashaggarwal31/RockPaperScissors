export default function BetterButton({children,option,onSelect,isSelected}) {
    let choice;
    if(option==false) choice = (<button onClick={onSelect}>{children}</button>);
    else choice = (<button onClick = {onSelect} class={isSelected?"active":undefined}>{children}</button>);
    
    return (
        choice
    );
  }
  