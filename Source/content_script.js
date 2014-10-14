walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  // Deal with the easy case
  v = v.replace(/\b(S|s)ervice(N|n)ow/g, function(match, p1, p2, offset, string) {
    s = String.fromCharCode(p1.charCodeAt(0));
    m = String.fromCharCode(p2.charCodeAt(0) - 1);
    return s + "ervice" + m + "eow";
  });

	textNode.nodeValue = v;
}
