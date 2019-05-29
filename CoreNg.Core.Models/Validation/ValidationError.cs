using System.Collections.Generic;

namespace CoreNg.Core.Models.Validation
{
    public class ValidationError
    {
        public string Control { get; set; }
        public IList<string> ErrorKeys { get; set; } = new List<string>();

        public ValidationError(string control, IList<string> errorKeys)
        {
            Control = control;
            ErrorKeys = errorKeys;
        }
    }
}
